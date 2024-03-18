import { setTotalCovidData } from '../../redux/reducers/totalCovidDataSlice';
import { TotalData } from '@/types/types';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import HomeContainer from '../../containers/home/home-container';

describe('HomeContainer component', () => {
  const mockStore = configureStore([]);

  it('should dispatch setTotalCovidData with correct data', () => {
    const initialState: TotalData = {
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
    };

    const store = mockStore({
      totalCovidData: initialState,
    });

    render(
      <Provider store={store}>
        <HomeContainer />
      </Provider>
    );

    expect(store.getActions()).to.deep.include({ type: 'FETCH_TOTAL_COVID_DATA' });
  });
});
