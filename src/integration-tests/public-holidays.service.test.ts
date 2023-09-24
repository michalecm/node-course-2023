import * as service from '../services/public-holidays.service'

describe('public holidays service', () => {
    it('should get list of public holidays', async () => {
        expect(await service.getListOfPublicHolidays(2023, 'DE')).toMatchSnapshot()
    })

    it('should check that today is a public holiday', async () => {
        expect(await service.checkIfTodayIsPublicHoliday('DE')).toMatchSnapshot()
    })

    it('should fail to check that today is a public holiday', async () => {
         expect(await service.checkIfTodayIsPublicHoliday('DE')).toBe(false)
    })

    it('should get next public holiday', async () => {
        expect(await service.getNextPublicHolidays('DE')).toMatchSnapshot()
    })
})
