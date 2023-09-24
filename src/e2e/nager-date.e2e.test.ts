import axios from "axios";
import { PUBLIC_HOLIDAYS_API_URL as url } from "../config";

describe('/CountryInfo/{countryCode}', () => {
    it('should fetch correct country with country code', async() => {
        const country = await axios.get(`${url + '/CountryInfo/DE'}`).then(res => res.data);
        expect(country.commonName).toEqual("Germany")
    })
})

describe('/AvailableCountries', () => {
    it('should fetch correct country with country code', async() => {
        const countries = await axios.get(`${url + '/AvailableCountries'}`).then(res => res.data);
        expect(countries).toBeInstanceOf(Array)
        expect(countries.length).toBeGreaterThan(0)
    })
})