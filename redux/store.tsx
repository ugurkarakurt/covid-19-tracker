import { combineReducers, createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import dataReducer from './reducers/dataSlice';
import dataSaga from './sagas/dataSaga';

const rootReducer = combineReducers({
  data: dataReducer,
  // diğer reducer'lar buraya eklenebilir
});

export type RootState = ReturnType<typeof rootReducer>;

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(dataSaga);

export default store;
