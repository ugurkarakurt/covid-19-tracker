import { setcountryCovidData } from '../../redux/reducers/countryCovidDataSlice';

describe('countryCovidData reducer', () => {
  it('should handle setcountryCovidData', () => {
    const countryData = {
      active: 100,
      activePerOneMillion: 200,
      cases: 300,
      casesPerOneMillion: 400,
      continent: "Europe",
      country: "Turkey",
      countryInfo: {
        iso2: "TR",
        iso3: "TUR",
        flag: "🇹🇷",
        lat: 39.9334,
        long: 32.8597,
        _id: 792,
      },
      critical: 50,
      criticalPerOneMillion: 60,
      deaths: 10,
      deathsPerOneMillion: 20,
      oneCasePerPeople: 5,
      oneDeathPerPeople: 10,
      oneTestPerPeople: 2,
      population: 85000000,
      recovered: 200,
      recoveredPerOneMillion: 250,
      tests: 10000,
      testsPerOneMillion: 12000,
      todayCases: 25,
      todayDeaths: 2,
      todayRecovered: 10,
      updated: 1646841600,
      message: "Success",
    };

    const action = setcountryCovidData(countryData);
    expect(action.type).equal('countryCovidData/setcountryCovidData'); // Action type kontrolü
    expect(action.payload).equal(countryData); // Action payload kontrolü
  });
});
