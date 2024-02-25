import { schedule, type ScheduleOptions, type ScheduledTask } from "node-cron";

type CronFunction = ((now: Date | "manual" | "init") => void) | string;

type CronUnit =
  | "second"
  | "minute"
  | "hour"
  | "day"
  | "week"
  | "month"
  | "year"
  | string;

export type {
  ScheduleOptions as CronOptions,
  ScheduledTask as CronTask,
  CronFunction,
  CronUnit,
};

export const cronSchedular = schedule;
