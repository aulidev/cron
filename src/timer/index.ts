import { CronFunction, CronOptions, CronTask, cronSchedular } from '@/lib'

/**
 * Represents a TimerType object that defines a mapping of timer names to functions.
 */
export type TimerType = {
  /**
   * Defines a timer function that takes a number, a callback function, and an optional CronOptions object as parameters,
   * and returns a CronTask object.
   * @param n - The number parameter.
   * @param callback - The callback function parameter.
   * @param option - The optional CronOptions parameter.
   * @returns A CronTask object.
   */
  [key: string]: (
    n: number,
    callback: CronFunction,
    option?: CronOptions,
    dayOfWeek?: number,
  ) => CronTask
}

/**
 * Timer object that provides methods to schedule cron tasks at specific intervals.
 * Executes a callback function every n seconds using a cron scheduler.
 * @param n - The number of seconds between each execution of the callback function.
 * @param callback - The function to be executed.
 * @param option - Optional configuration options for the cron task.
 * @returns The cron task object.
 */

const Timer: TimerType = {
  everyNSeconds: (
    n: number,
    callback: CronFunction,
    option?: CronOptions,
  ): CronTask => {
    return cronSchedular(`*/${n} * * * * *`, callback, option)
  },
  everyNMinutes: (
    n: number,
    callback: CronFunction,
    option?: CronOptions,
  ): CronTask => {
    return cronSchedular(`*/${n} * * * *`, callback, option)
  },
  everyNHours: (
    n: number,
    callback: CronFunction,
    option?: CronOptions,
  ): CronTask => {
    return cronSchedular(`0 */${n} * * *`, callback, option)
  },
  everyNDays: (
    n: number,
    callback: CronFunction,
    option?: CronOptions,
  ): CronTask => {
    return cronSchedular(`0 0 */${n} * *`, callback, option)
  },
  everyNWeeks: (
    n: number,
    callback: CronFunction,
    option?: CronOptions,
  ): CronTask => {
    return cronSchedular(`0 0 * * ${n}`, callback, option)
  },
  everyNMonths: (
    n: number,
    callback: CronFunction,
    option?: CronOptions,
  ): CronTask => {
    return cronSchedular(`0 0 1 */${n} *`, callback, option)
  },
  everyNYears: (
    n: number,
    callback: CronFunction,
    option?: CronOptions,
  ): CronTask => {
    return cronSchedular(`0 0 1 1 */${n}`, callback, option)
  },
  everyNWeeksAtDay: (
    n: number,
    callback: CronFunction,
    option?: CronOptions,
    dayOfWeek?: number,
  ): CronTask => {
    return cronSchedular(`0 0 */${n} * ${dayOfWeek}`, callback, option)
  },
}

export default Timer
