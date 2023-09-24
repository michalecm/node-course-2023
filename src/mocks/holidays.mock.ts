import { PublicHoliday, PublicHolidayShort } from "../types";

export const holiday = new Date('2012-04-16').toLocaleDateString()

export const mockHoliday: PublicHoliday =  {
    date: holiday,
    localName: 'Fantastic Day',
    name: 'Universal Fantastic Day',
    countryCode: 'DE',
    fixed: true,
    global: true,
    types: ['Public'],
    counties: null,
    launchYear: 2023
  };

export const mockHolidayShort: PublicHolidayShort = {
  name: 'Universal Fantastic Day', localName: 'Fantastic Day', date: holiday
}
