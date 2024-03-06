import {
  CronFunction,
  CronOptions,
  CronTask,
  CronUnit,
  cronSchedular,
} from '@/lib'
import { generateEveryMethod } from '@/lib/every'
import { convertDayToNumber, getHoursMinutesSeconds } from '@/lib/time'

/**
 * Represents a cron job configuration.
 */
type Cron = {
  every: (interval: number) => {
    [unit in CronUnit]: {
      do: (callback: CronFunction, option?: CronOptions) => CronTask
    }
  }
  daily: {
    runAt: (time: string) => {
      do: (callback: CronFunction, option?: CronOptions) => CronTask
    }
  }
  weekly: {
    runAt: (time: string) => {
      on: (day: string) => {
        do: (callback: CronFunction, option?: CronOptions) => CronTask
      }
    }
  }
}

/**
Returns an object with methods to generate intervals for different time units.
@param interval - The interval value for the time units.
@returns An object with methods to generate intervals for different time units.
*/

const cron: Cron = {
  every: (interval: number) => ({
    second: generateEveryMethod('second', interval),
    minute: generateEveryMethod('minute', interval),
    hour: generateEveryMethod('hour', interval),
    day: generateEveryMethod('day', interval),
    week: generateEveryMethod('week', interval),
    month: generateEveryMethod('month', interval),
    year: generateEveryMethod('year', interval),
  }),
  daily: {
    runAt(time: string) {
      return {
        do(callback: CronFunction, option?: CronOptions): CronTask {
          const { hour, minute, second } = getHoursMinutesSeconds(time)
          const cronString = `${second === 0 ? '0' : second} ${minute === 0 ? '0' : minute} ${hour === 0 ? '*' : `*/${hour}`} * * *`
          return cronSchedular(cronString, callback, option)
        },
      }
    },
  },
  weekly: {
    runAt(time: string) {
      return {
        on(day: string) {
          return {
            do(callback: CronFunction, option?: CronOptions): CronTask {
              const { hour, minute, second } = getHoursMinutesSeconds(time)
              const dayOfWeek = convertDayToNumber(day)
              return cronSchedular(
                `${second === 0 ? '0' : second} ${minute === 0 ? '0' : minute} ${hour === 0 ? '*' : `*/${hour}`} * * ${dayOfWeek}`,
                callback,
                option,
              )
            },
          }
        },
      }
    },
  },
}

export default cron
