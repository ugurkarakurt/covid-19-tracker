import { takeLatest, put } from 'redux-saga/effects';
import { setData } from '../reducers/dataReducer';
import { Todo } from '../../types';

function* fetchData() {
  try {
    const response = yield fetch('https://jsonplaceholder.typicode.com/todos');
    const data: Todo[] = yield response.json();
    yield put(setData(data));
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

function* rootSaga() {
  yield takeLatest('FETCH_DATA', fetchData);
}

export default rootSaga;
