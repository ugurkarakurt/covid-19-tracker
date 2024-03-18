import { setTotalCovidData } from '../../redux/reducers/totalCovidDataSlice';

describe('totalCovidData reducer', () => {
  it('should handle setTotalCovidData', () => {
    const totalData = {
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
    };

    const action = setTotalCovidData(totalData);
    expect(action.type).equal('totalCovidData/setTotalCovidData'); // Action type kontrolü
    expect(action.payload).equal(totalData); // Action payload kontrolü
  });
});
