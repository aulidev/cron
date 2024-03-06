import { describe, expect, it } from 'vitest'

import cron from '@/index'

describe('Cron Scheudle Test ', () => {
  describe('Should be defined (cron.every)', () => {
    it('Should be defined cron value', () => {
      expect(cron).toBeDefined()
    })
    it('Should have secods method', () => {
      expect(cron.every(1).second).toBeDefined()
    })
    it('Should have minute method', () => {
      expect(cron.every(1).minute).toBeDefined()
    })
    it('Should have hour method', () => {
      expect(cron.every(1).hour).toBeDefined()
    })
    it('Should have day method', () => {
      expect(cron.every(1).day).toBeDefined()
    })
    it('Should have week method', () => {
      expect(cron.every(1).week).toBeDefined()
    })
    it('Should have month method', () => {
      expect(cron.every(1).month).toBeDefined()
    })
    it('Should have year method', () => {
      expect(cron.every(1).year).toBeDefined()
    })
  })

  describe('Should be define (cron.daily.runAt.on)', () => {
    it('Should be defined cron value', () => {
      expect(cron.daily).toBeDefined()
    })
    it('Should have runAt method', () => {
      expect(cron.daily.runAt).toBeDefined()
    })
  })

  describe('Should be define (cron.weekly.runAt.on)', () => {
    it('Should be defined cron value', () => {
      expect(cron.weekly).toBeDefined()
    })
    it('Should have runAt method', () => {
      expect(cron.weekly.runAt).toBeDefined()
    })
    it('Should have on method', () => {
      expect(cron.weekly.runAt('12:00').on).toBeDefined()
    })
  })

  describe('Should be able to schedule (cron.every(n))', () => {
    it('Should be able to schedule every second', () => {
      const task = cron.every(1).second.do(() => {})
      expect(task).toBeDefined()
    })
    it('Should be able to schedule every minute', () => {
      const task = cron.every(1).minute.do(() => {})
      expect(task).toBeDefined()
    })
    it('Should be able to schedule every hour', () => {
      const task = cron.every(1).hour.do(() => {})
      expect(task).toBeDefined()
    })
    it('Should be able to schedule every day', () => {
      const task = cron.every(1).day.do(() => {})
      expect(task).toBeDefined()
    })
    it('Should be able to schedule every week', () => {
      const task = cron.every(1).week.do(() => {})
      expect(task).toBeDefined()
    })
    it('Should be able to schedule every month', () => {
      const task = cron.every(1).month.do(() => {})
      expect(task).toBeDefined()
    })
    it('Should be able to schedule every year', () => {
      const task = cron.every(1).year.do(() => {})
      expect(task).toBeDefined()
    })
  })

  describe('Should be able to schedule with options (cron.every(n))', () => {
    it('Should be able to schedule every second with options', () => {
      const task = cron
        .every(1)
        .second.do(() => {}, { timezone: 'America/New_York' })
      expect(task).toBeDefined()
    })
    it('Should be able to schedule every minute with options', () => {
      const task = cron
        .every(1)
        .minute.do(() => {}, { timezone: 'America/New_York' })
      expect(task).toBeDefined()
    })
    it('Should be able to schedule every hour with options', () => {
      const task = cron
        .every(1)
        .hour.do(() => {}, { timezone: 'America/New_York' })
      expect(task).toBeDefined()
    })
    it('Should be able to schedule every day with options', () => {
      const task = cron
        .every(1)
        .day.do(() => {}, { timezone: 'America/New_York' })
      expect(task).toBeDefined()
    })
    it('Should be able to schedule every week with options', () => {
      const task = cron
        .every(1)
        .week.do(() => {}, { timezone: 'America/New_York' })
      expect(task).toBeDefined()
    })
    it('Should be able to schedule every month with options', () => {
      const task = cron
        .every(1)
        .month.do(() => {}, { timezone: 'America/New_York' })
      expect(task).toBeDefined()
    })
    it('Should be able to schedule every year with options', () => {
      const task = cron
        .every(1)
        .year.do(() => {}, { timezone: 'America/New_York' })
      expect(task).toBeDefined()
    })
  })

  describe('Should be able to schedule with options (cron.daily.runAt("12:00"))', () => {
    it('Should be able to schedule daily at 12:00', () => {
      const task = cron.daily.runAt('12:00').do(() => {})
      expect(task).toBeDefined()
    })
    it('Should be able to schedule daily at 12:00 with options', () => {
      const task = cron.daily.runAt('12:00').do(() => {}, {
        timezone: 'America/New_York',
      })
      expect(task).toBeDefined()
    })
  })

  describe('Should be able to schedule with options (cron.daily.runAt("12:00 PM"))', () => {
    it('Should be able to schedule daily at 12:00 PM', () => {
      const task = cron.daily.runAt('12:00 PM').do(() => {})
      expect(task).toBeDefined()
    })
    it('Should be able to schedule daily at 12:00 PM with options', () => {
      const task = cron.daily.runAt('12:00 PM').do(() => {}, {
        timezone: 'America/New_York',
      })
      expect(task).toBeDefined()
    })
  })

  describe('Should be able to schedule with options (cron.daily.runAt("12:00 AM"))', () => {
    it('Should be able to schedule daily at 12:00 AM', () => {
      const task = cron.daily.runAt('12:00 AM').do(() => {})
      expect(task).toBeDefined()
    })
    it('Should be able to schedule daily at 12:00 AM with options', () => {
      const task = cron.daily.runAt('12:00 AM').do(() => {}, {
        timezone: 'America/New_York',
      })
      expect(task).toBeDefined()
    })
  })

  describe('Should be able to schedule with options (cron.daily.runAt("12:00:00"))', () => {
    it('Should be able to schedule daily at 12:00:00', () => {
      const task = cron.daily.runAt('12:00:00').do(() => {})
      expect(task).toBeDefined()
    })
    it('Should be able to schedule daily at 12:00:00 with options', () => {
      const task = cron.daily.runAt('12:00:00').do(() => {}, {
        timezone: 'America/New_York',
      })
      expect(task).toBeDefined()
    })
  })

  describe('Should be able to schedule with options (cron.daily.runAt("12:00:00 PM"))', () => {
    it('Should be able to schedule daily at 12:00:00 PM', () => {
      const task = cron.daily.runAt('12:00:00 PM').do(() => {})
      expect(task).toBeDefined()
    })
    it('Should be able to schedule daily at 12:00:00 PM with options', () => {
      const task = cron.daily.runAt('12:00:00 PM').do(() => {}, {
        timezone: 'America/New_York',
      })
      expect(task).toBeDefined()
    })
  })

  describe('Should be able to schedule with options (cron.daily.runAt("12:00:00 AM"))', () => {
    it('Should be able to schedule daily at 12:00:00 AM', () => {
      const task = cron.daily.runAt('12:00:00 AM').do(() => {})
      expect(task).toBeDefined()
    })
    it('Should be able to schedule daily at 12:00:00 AM with options', () => {
      const task = cron.daily.runAt('12:00:00 AM').do(() => {}, {
        timezone: 'America/New_York',
      })
      expect(task).toBeDefined()
    })
  })

  describe('Should be able to schedule with options (cron.weekly.runAt("12:00").on("monday"))', () => {
    it('Should be able to schedule weekly at 12:00 on monday', () => {
      const task = cron.weekly
        .runAt('12:00')
        .on('monday')
        .do(() => {})
      expect(task).toBeDefined()
    })
    it('Should be able to schedule weekly at 12:00 on monday with options', () => {
      const task = cron.weekly
        .runAt('12:00')
        .on('monday')
        .do(() => {}, {
          timezone: 'America/New_York',
        })
      expect(task).toBeDefined()
    })
    // wrong day to get error
    it('Should get and error  while schedule with options (cron.weekly.runAt("12:00").on("mondays"))', () => {
      expect(() => {
        cron.weekly
          .runAt('12:00')
          .on('mondays')
          .do(() => {})
      }).toThrowError('Invalid day: mondays')
    })
  })

  describe('Should be able to schedule with options (cron.weekly.runAt("12:00 PM").on("monday"))', () => {
    it('Should be able to schedule weekly at 12:00 PM on monday', () => {
      const task = cron.weekly
        .runAt('12:00 PM')
        .on('monday')
        .do(() => {})
      expect(task).toBeDefined()
    })
    it('Should be able to schedule weekly at 12:00 PM on monday with options', () => {
      const task = cron.weekly
        .runAt('12:00 PM')
        .on('monday')
        .do(() => {}, {
          timezone: 'America/New_York',
        })
      expect(task).toBeDefined()
    })
  })

  describe('Should be able to schedule with options (cron.weekly.runAt("12:00 AM").on("monday"))', () => {
    it('Should be able to schedule weekly at 12:00 AM on monday', () => {
      const task = cron.weekly
        .runAt('12:00 AM')
        .on('monday')
        .do(() => {})
      expect(task).toBeDefined()
    })
    it('Should be able to schedule weekly at 12:00 AM on monday with options', () => {
      const task = cron.weekly
        .runAt('12:00 AM')
        .on('monday')
        .do(() => {}, {
          timezone: 'America/New_York',
        })
      expect(task).toBeDefined()
    })
  })

  describe('Should be able to schedule with options (cron.weekly.runAt("12:00:00").on("monday"))', () => {
    it('Should be able to schedule weekly at 12:00:00 on monday', () => {
      const task = cron.weekly
        .runAt('12:00:00')
        .on('monday')
        .do(() => {})
      expect(task).toBeDefined()
    })
    it('Should be able to schedule weekly at 12:00:00 on monday with options', () => {
      const task = cron.weekly
        .runAt('12:00:00')
        .on('monday')
        .do(() => {}, {
          timezone: 'America/New_York',
        })
      expect(task).toBeDefined()
    })
  })

  describe('Should be able to schedule with options (cron.weekly.runAt("12:00:00 PM").on("monday"))', () => {
    it('Should be able to schedule weekly at 12:00:00 PM on monday', () => {
      const task = cron.weekly
        .runAt('12:00:00 PM')
        .on('monday')
        .do(() => {})
      expect(task).toBeDefined()
    })
    it('Should be able to schedule weekly at 12:00:00 PM on monday with options', () => {
      const task = cron.weekly
        .runAt('12:00:00 PM')
        .on('monday')
        .do(() => {}, {
          timezone: 'America/New_York',
        })
      expect(task).toBeDefined()
    })
  })

  describe('Should be able to schedule with options (cron.weekly.runAt("12:00:00 AM").on("monday"))', () => {
    it('Should be able to schedule weekly at 12:00:00 AM on monday', () => {
      const task = cron.weekly
        .runAt('12:00:00 AM')
        .on('monday')
        .do(() => {})
      expect(task).toBeDefined()
    })
    it('Should be able to schedule weekly at 12:00:00 AM on monday with options', () => {
      const task = cron.weekly
        .runAt('12:00:00 AM')
        .on('monday')
        .do(() => {}, {
          timezone: 'America/New_York',
        })
      expect(task).toBeDefined()
    })
  })
})
