import { CronFunction, CronOptions, CronTask, CronUnit } from '@/lib'
import Timer from '@/timer'

/**
Generates a method for executing a callback function at regular intervals.
@param unit - The unit of time for the interval (e.g. 'second', 'minute', 'hour').
@param interval - The interval duration in milliseconds.
@returns An object with a 'do' method for executing the callback function.
*/

export function generateEveryMethod(unit: CronUnit, interval: number) {
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
