import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import DetailContainer from '../../containers/detail/detail.container';

describe('DetailContainer component', () => {
  const mockStore = configureStore([]);

  it('should render DetailContainer correctly', () => {
    const initialState = {
      countryCovidData: {
        updated: 1646841600,
        cases: 1000,
        todayCases: 2000,
        deaths: 3000,
        todayDeaths: 4000,
        recovered: 5000,
        todayRecovered: 6000,
        active: 7000,
        critical: 8000,
        casesPerOneMillion: 9000,
        deathsPerOneMillion: 10000,
        tests: 11000,
        testsPerOneMillion: 12000,
        population: 13000,
        oneCasePerPeople: 14000,
        oneDeathPerPeople: 15000,
        oneTestPerPeople: 16000,
        activePerOneMillion: 17000,
        recoveredPerOneMillion: 18000,
        criticalPerOneMillion: 19000,
        affectedCountries: 20000,
        country: 'Turkey',
        continent: 'Europe',
        countryInfo: {
          iso2: 'TR',
          iso3: 'TUR',
          flag: 'flag-url',
          lat: 39.0,
          long: 35.0,
          _id: 123,
        },
        message: '',
      },
    };

    const store = mockStore(initialState);

    const { getByText } = render(
      <Provider store={store}>
        <DetailContainer country="Turkey" />
      </Provider>
    );

    expect(getByText('Turkey / Europe')).to.exist;
  });
});
