import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import MapChart from '../../components/map-chart/mapChart.components';

describe('MapChart component', () => {
  const mockStore = configureStore([]);

  it('should render MapChart component correctly', () => {
    const initialState = {
      countriesCovidData: {
        'Turkey': { country: 'Turkey', cases: 1000 },
        'USA': { country: 'USA', cases: 5000 },
      },
    };
    const store = mockStore(initialState);

    const { getByTestId } = render(
      <Provider store={store}>
        <MapChart />
      </Provider>
    );

    expect(getByTestId('map-container')).to.exist;

  });
});
