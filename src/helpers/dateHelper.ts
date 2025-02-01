export const addUTCOffset = (date: Date, offsetHours: number): Date => {
  // Get the current UTC time in milliseconds
  const utcTime = date.getTime() + (date.getTimezoneOffset() * 60000)

  // Create a new date object with the UTC+2 offset
  const newDate = new Date(utcTime + (offsetHours * 3600000))

  return newDate // Return the new date in ISO format
}
