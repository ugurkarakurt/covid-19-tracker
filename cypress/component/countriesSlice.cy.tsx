import { setCountriesCovidData } from '../../redux/reducers/countriesCovidDataSlice';

describe('countriesCovidData reducer', () => {
  it('should handle setCountriesCovidData', () => {
    const countryData = {
      'Turkey': {
        updated: 1646841600,
        cases: 10000,
        todayCases: 100,
        deaths: 500,
        todayDeaths: 10,
        recovered: 8000,
        todayRecovered: 50,
        active: 1500,
        critical: 100,
        casesPerOneMillion: 12000,
        deathsPerOneMillion: 200,
        tests: 50000,
        testsPerOneMillion: 60000,
        population: 85000000,
        oneCasePerPeople: 8500,
        oneDeathPerPeople: 17000,
        oneTestPerPeople: 1700,
        activePerOneMillion: 18000,
        recoveredPerOneMillion: 94000,
        criticalPerOneMillion: 1200,
        affectedCountries: 200,
        continent: 'Europe',
        country: 'Turkey',
        countryInfo: {
          iso2: 'TR',
          iso3: 'TUR',
          flag: 'https://www.example.com/flag.png',
          lat: 38.9637,
          long: 35.2433,
          _id: 792,
        },
      },
    };
    const action = setCountriesCovidData(countryData);
    expect(action.type).equal('countriesCovidData/setCountriesCovidData');
    expect(action.payload).equal(countryData);
  });
});
