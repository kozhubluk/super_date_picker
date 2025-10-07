import React, { useState, useRef, ReactNode, useLayoutEffect, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { usePopper } from 'react-popper'
import { theme } from '../../theme'

interface TooltipPopoverProps {
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
  button: ReactNode
  children: ReactNode
  placement?: 'top' | 'bottom' | 'left' | 'right'
}

export const TooltipPopover: React.FC<TooltipPopoverProps> = ({
  button,
  children,
  placement = 'bottom',
  isOpen,
  setIsOpen,
}) => {
  const [isVisible, setIsVisible] = useState(false)
  const buttonRef = useRef<HTMLElement | null>(null)
  const popperRef = useRef<HTMLDivElement | null>(null)

  const [referenceElement, setReferenceElement] = useState<HTMLElement | null>(null)
  const [popperElement, setPopperElement] = useState<HTMLDivElement | null>(null)

  const { styles, attributes, update } = usePopper(referenceElement, popperElement, {
    placement,
    modifiers: [
      {
        name: 'offset',
        options: { offset: [0, 8] },
      },
      {
        name: 'flip',
        enabled: true,
      },
      {
        name: 'preventOverflow',
        enabled: true,
      },
    ],
  })

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }, [isOpen])

  useLayoutEffect(() => {
    if (isOpen && update) {
      requestAnimationFrame(() => {
        update()
      })
    }
  }, [isOpen, update])

  useEffect(() => {
    if (!isOpen || !update) return

    const handleScrollAndResize = () => {
      update()
    }

    document.addEventListener('scroll', handleScrollAndResize, true)
    window.addEventListener('resize', handleScrollAndResize)

    return () => {
      document.removeEventListener('scroll', handleScrollAndResize, true)
      window.removeEventListener('resize', handleScrollAndResize)
    }
  }, [isOpen, update])

  useEffect(() => {
    if (!isOpen) return

    const handleClickOutside = (event: MouseEvent) => {
      if (
        popperRef.current &&
        !popperRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen, setIsOpen])

  const togglePopover = () => setIsOpen((prev) => !prev)

  const handleAnimationEnd = () => {
    if (!isVisible) {
      setIsOpen(false)
    }
  }

  const buttonWithProps = React.isValidElement(button)
    ? React.cloneElement(button as React.ReactElement, {
        ref: (node: HTMLElement | null) => {
          buttonRef.current = node
          setReferenceElement(node)

          const originalRef = (button as any).ref
          if (typeof originalRef === 'function') {
            originalRef(node)
          } else if (originalRef && typeof originalRef === 'object') {
            originalRef.current = node
          }
        },
        onClick: (e: React.MouseEvent) => {
          togglePopover()
          ;(button as any).props?.onClick?.(e)
        },
      })
    : button

  return (
    <>
      {buttonWithProps}

      {isOpen &&
        createPortal(
          <div
            ref={(node) => {
              popperRef.current = node
              setPopperElement(node)
            }}
            style={{
              ...styles.popper,
              WebkitBoxShadow: '0px 0px 10px 0px rgba(0, 0, 0, 0.2)',
              MozBoxShadow: '0px 0px 10px 0px rgba(0, 0, 0, 0.2)',
              boxShadow: '0px 0px 10px 0px rgba(0, 0, 0, 0.2)',
              zIndex: 9999,
              pointerEvents: 'auto',
              borderRadius: theme.borders.radius,
              backgroundColor: theme.colors.background.light,
              transform: `${styles.popper?.transform || ''}`,
            }}
            onAnimationEnd={handleAnimationEnd}
            {...attributes.popper}
          >
            {children}
          </div>,
          document.body,
        )}
    </>
  )
}
