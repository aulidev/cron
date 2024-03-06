/**
 * Converts a time string to seconds.
 * @param time - The time string in the format "HH:MM:SS AM/PM".
 * @returns The time in seconds.
 */
// export function convertTimeToSeconds(time: string): number {
//   const [timeStr, amPm] = time.split(' ')
//   const [hourStr, minuteStr, secondStr] = timeStr.split(':')
//   let hour = parseInt(hourStr, 10)
//   const minute = minuteStr ? parseInt(minuteStr, 10) : 0
//   const second = secondStr ? parseInt(secondStr, 10) : 0

//   if (amPm) {
//     if (amPm.toLowerCase() === 'pm' && hour < 12) {
//       hour += 12
//     } else if (amPm.toLowerCase() === 'am' && hour === 12) {
//       hour = 0
//     }
//   }
//   return hour * 3600 + minute * 60 + second
// }

export function getHoursMinutesSeconds(time: string): {
  hour: number
  minute: number
  second: number
} {
  const [timeStr, amPm] = time.split(' ')
  const [hourStr, minuteStr, secondStr] = timeStr.split(':')
  let hour = parseInt(hourStr, 10)
  const minute = minuteStr ? parseInt(minuteStr, 10) : 0
  const second = secondStr ? parseInt(secondStr, 10) : 0

  if (amPm) {
    if (amPm.toLowerCase() === 'pm' && hour < 12) {
      hour += 12
    } else if (amPm.toLowerCase() === 'am' && hour === 12) {
      hour = 0
    }
  }
  return { hour, minute, second }
}

/**
 * Converts a day of the week to its corresponding number.
 *
 * @param day - The day of the week.
 * @returns The corresponding number for the given day.
 * @throws Error if the given day is invalid.
 */
export function convertDayToNumber(day: string): number {
  const days = [
    'sunday',
    'monday',
    'tuesday',
    'wednesday',
    'thursday',
    'friday',
    'saturday',
  ]
  const index = days.indexOf(day.toLowerCase())
  if (index === -1) {
    throw new Error(`Invalid day: ${day}`)
  }
  return index
}
