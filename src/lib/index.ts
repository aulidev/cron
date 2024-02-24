import { schedule, type ScheduleOptions, type ScheduledTask } from "node-cron";

type CallBackTypes = ((now: Date | "manual" | "init") => void) | string;

export type {
  ScheduleOptions as CronOptions,
  ScheduledTask as CronTask,
  CallBackTypes,
};

export const cronSchedular = schedule;
