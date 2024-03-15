import { put, takeLatest } from 'redux-saga/effects';
import { setTotalCovidData } from '../reducers/dataSlice';
import { transformCountryData } from '@/utils/pseudo.utils';
import { get } from "../../utils/request.utils";
import { CountryData } from '@/types';


function* fetchTotalCovidData(): Generator<any, void, any> {
  try {
    const responses = yield get(process.env.NEXT_PUBLIC_API_URL);
    const transformedResponses = responses.map(transformCountryData);
    const obj: { [key: string]: CountryData } = transformedResponses.reduce((acc: { [key: string]: CountryData }, item: CountryData) => {
      acc[item.country] = item;
      return acc;
    }, {});

    yield put(setTotalCovidData(obj));
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

function* dataSaga() {
  yield takeLatest('FETCH_TOTAL_COVID_DATA', fetchTotalCovidData);
}

export default dataSaga;
