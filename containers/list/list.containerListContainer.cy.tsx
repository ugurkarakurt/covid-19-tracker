import { setcountryCovidData } from '../../redux/reducers/countryCovidDataSlice';
import { CountryData } from '@/types/types';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import ListContainer from '../../containers/list/list.container';

describe('ListContainer component', () => {
  const mockStore = configureStore([]);

  it('should dispatch setcountryCovidData with correct data', () => {
    const initialState = {
      countryCovidData: {
        active: 100,
        activePerOneMillion: 200,
        cases: 300,
        casesPerOneMillion: 400,
        continent: "Europe",
        country: "Turkey",
        countryInfo: {
          iso2: "TR",
          iso3: "TUR",
          flag: "flag-url",
          lat: 39.0,
          long: 35.0,
          _id: 123,
        },
        critical: 50,
        criticalPerOneMillion: 60,
        deaths: 70,
        deathsPerOneMillion: 80,
        oneCasePerPeople: 90,
        oneDeathPerPeople: 100,
        oneTestPerPeople: 110,
        population: 82000000,
        recovered: 120,
        recoveredPerOneMillion: 130,
        tests: 140,
        testsPerOneMillion: 150,
        todayCases: 160,
        todayDeaths: 170,
        todayRecovered: 180,
        updated: 1646841600,
        message: "Success",
      },
      countriesCovidData: {
        'Turkey': {
          country: 'Turkey',
          cases: 1000,
        },
        'USA': {
          country: 'USA',
          cases: 5000,
        },
      },
    };

    const store = mockStore(initialState);

    render(
      <Provider store={store}>
        <ListContainer />
      </Provider>
    );

    const expectedActionPayload: CountryData = {
      ...initialState.countryCovidData,
      cases: 0,
      message: "",
    };

    expect(store.getActions()).to.deep.include(setcountryCovidData(expectedActionPayload));
  });
});
