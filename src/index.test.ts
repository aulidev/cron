import { describe, expect, it } from 'vitest'

import cron from '@/index'

describe('Cron Scheudle Test ', () => {
  describe('Should be defined', () => {
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

  describe('Should be able to schedule', () => {
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

  describe('Should be able to schedule with options', () => {
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
})
