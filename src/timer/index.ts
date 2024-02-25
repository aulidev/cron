import { CronFunction, CronOptions, CronTask, cronSchedular } from '@/lib'

const Timer = {
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
}

export default Timer
