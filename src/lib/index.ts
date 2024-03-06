import { schedule, type ScheduleOptions, type ScheduledTask } from 'node-cron'

/**
 * Represents a function that can be executed by a cron job.
 * It can either accept a `Date` object, the string `'manual'`, or the string `'init'`.
 */
export type CronFunction = ((now: Date | 'manual' | 'init') => void) | string

/**
 * Represents a unit of time in a cron expression.
 */
export type CronUnit =
  | 'second'
  | 'minute'
  | 'hour'
  | 'day'
  | 'week'
  | 'month'
  | 'year'

export type CronOptions = ScheduleOptions

export type CronTask = ScheduledTask

export const cronSchedular = schedule
