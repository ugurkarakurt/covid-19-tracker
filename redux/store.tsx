import { combineReducers, createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import countriesCovidDataReducer from './reducers/countriesCovidDataSlice';
import countryCovidDataReducer from './reducers/countryCovidDataSlice';
import totalCovidDataReducer from './reducers/totalCovidDataSlice';

import dataSaga from './sagas/dataSaga';

const rootReducer = combineReducers({
  countriesCovidData: countriesCovidDataReducer,
  countryCovidData: countryCovidDataReducer,
  totalCovidData: totalCovidDataReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(dataSaga);

export default store;
