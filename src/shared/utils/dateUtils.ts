export const isValidDate = (date: any) => {
  if (Object.prototype.toString.call(date) === '[object Date]') {
    return !isNaN(date.getTime())
  }
  return false
}
