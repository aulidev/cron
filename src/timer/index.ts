import { CallBackTypes, CronOptions, CronTask, cronSchedular } from "@/lib";

const Timer = {
  everyNSeconds: (
    n: number,
    callback: CallBackTypes,
    option?: CronOptions,
  ): CronTask => {
    return cronSchedular(`*/${n} * * * * *`, callback, option);
  },
  everyNMinutes: (
    n: number,
    callback: CallBackTypes,
    option?: CronOptions,
  ): CronTask => {
    return cronSchedular(`*/${n} * * * *`, callback, option);
  },
  everyNHours: (
    n: number,
    callback: CallBackTypes,
    option?: CronOptions,
  ): CronTask => {
    return cronSchedular(`0 */${n} * * *`, callback, option);
  },
};

export default Timer;
