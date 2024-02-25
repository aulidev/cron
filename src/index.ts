import Timer from "@/timer";
import { CronFunction, CronOptions, CronTask, CronUnit } from "@/lib";

interface Cron {
  every: (interval: number) => {
    [unit: string]: {
      do: (callback: CronFunction, option?: CronOptions) => CronTask;
    };
  };
}

const cron: Cron = {
  every: (interval: number) => ({
    second: generateMethod("second", interval),
    minute: generateMethod("minute", interval),
    hour: generateMethod("hour", interval),
    day: generateMethod("day", interval),
    week: generateMethod("week", interval),
    month: generateMethod("month", interval),
    year: generateMethod("year", interval),
  }),
};

function generateMethod(unit: CronUnit, interval: number) {
  const methodName = `everyN${unit.charAt(0).toUpperCase() + unit.slice(1)}s`;
  console.log(methodName);
  return {
    do(callback: CronFunction, option?: CronOptions): CronTask {
      return (Timer as any)[methodName](interval, callback, option);
    },
  };
}

cron.every(1).second.do(() => {}, {});
cron.every(1).minute.do(() => {}, {});
cron.every(1).hour.do(() => {}, {});
cron.every(1).day.do(() => {}, {});
cron.every(1).week.do(() => {}, {});
cron.every(1).month.do(() => {}, {});
cron.every(1).year.do(() => {}, {});

export default cron;
