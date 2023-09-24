import * as service from './public-holidays.service'
import axios from 'axios'
import * as holidayMocks from '../mocks/holidays.mock'

jest.mock('axios')

describe('public holidays service', () => {
    it('should get list of public holidays', async () => {
        (axios.get as jest.Mock).mockResolvedValue({data: [holidayMocks.mockHoliday]})
        expect(await service.getListOfPublicHolidays(2023, 'DE')).toEqual([holidayMocks.mockHolidayShort])
    })

    it('should fail to get list of public holidays', async () => {
        (axios.get as jest.Mock).mockResolvedValue({})
        expect(await service.getListOfPublicHolidays(2023, 'DE')).toEqual([])
    })


    it('should check that today is a public holiday', async () => {
        (axios.get as jest.Mock).mockResolvedValue({status: 200})
        expect(await service.checkIfTodayIsPublicHoliday('DE')).toBe(true)
    })

    it('should fail to check that today is a public holiday', async () => {
        (axios.get as jest.Mock).mockResolvedValue(null)
        expect(await service.checkIfTodayIsPublicHoliday('DE')).toBe(false)
    })

    it('should get next public holiday', async () => {
        (axios.get as jest.Mock).mockResolvedValue({data: [holidayMocks.mockHoliday]})
        expect(await service.getNextPublicHolidays('DE')).toEqual([holidayMocks.mockHolidayShort])
    })

    it('should fail to get next public holiday', async () => {
        (axios.get as jest.Mock).mockResolvedValue([holidayMocks.mockHoliday])
        expect(await service.getNextPublicHolidays('DE')).toEqual([])
    })
})
