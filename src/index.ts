import Timer from '@/timer'
import { CronFunction, CronOptions, CronTask, CronUnit } from '@/lib'

/**
Generates a method for executing a callback function at regular intervals.
@param unit - The unit of time for the interval (e.g. 'second', 'minute', 'hour').
@param interval - The interval duration in milliseconds.
@returns An object with a 'do' method for executing the callback function.
*/

function generateEveryMethod(unit: CronUnit, interval: number) {
  const methodName = `everyN${unit.charAt(0).toUpperCase() + unit.slice(1)}s`
  return {
    /**
     * Executes the provided callback function at regular intervals.
     * @param callback - The function to be executed.
     * @param option - Optional configuration options for the cron task.
     * @returns A cron task object.
     */
    do(callback: CronFunction, option?: CronOptions): CronTask {
      return Timer[methodName](interval, callback, option)
    },
  }
}

/**
 * Represents a cron job configuration.
 */
type Cron = {
  every: (interval: number) => {
    [unit in CronUnit]: {
      do: (callback: CronFunction, option?: CronOptions) => CronTask
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
}

export default cron
