import * as helpers from './helpers'
import * as holidayMocks from './mocks/holidays.mock'

describe('helpers', () => {
    it('should validate country', () => {
        expect(() => helpers.validateInput({ year: 2022, country: 'BE'})).toThrow(`Country provided is not supported, received: BE`)
        expect(() => helpers.validateInput({ year: -1, country: 'DE'})).toThrow(`Year provided not the current, received: -1`)
        expect(helpers.validateInput({ year: 2023, country: 'DE'})).toBe(true)
    })

    it('should shorten public holiday', () => {
        expect(helpers.shortenPublicHoliday(holidayMocks.mockHoliday)).toMatchObject(holidayMocks.mockHolidayShort)
    })
})