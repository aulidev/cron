import Timer from "@/timer";
import { CallBackTypes, CronOptions, CronTask } from "@/lib";

const createCronEvery = (unit: string) => ({
  every: (n: number) => ({
    do: (callback: CallBackTypes, option?: CronOptions): CronTask => {
      return Timer[`everyN${unit}s` as keyof typeof Timer](n, callback, option);
    },
  }),
});

interface Cron {
  second: {
    every: (n: number) => {
      do: (callback: CallBackTypes, option?: CronOptions) => CronTask;
    };
  };
  minute: {
    every: (n: number) => {
      do: (callback: CallBackTypes, option?: CronOptions) => CronTask;
    };
  };
  hour: {
    every: (n: number) => {
      do: (callback: CallBackTypes, option?: CronOptions) => CronTask;
    };
  };
}

const cron: Cron = {
  second: createCronEvery("Second"),
  minute: createCronEvery("Minute"),
  hour: createCronEvery("Hour"),
};
