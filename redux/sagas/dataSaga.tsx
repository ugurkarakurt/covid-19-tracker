import { put, takeLatest, call } from 'redux-saga/effects';
import { setCountriesCovidData } from '../reducers/countriesCovidDataSlice';
import { transformCountryData } from '@/utils/pseudo.utils';
import { get } from "../../utils/request.utils";
import { CountryData, TotalData } from '@/types';
import { setTotalCovidData } from '../reducers/totalCovidDataSlice';

function* fetchCountriesCovidData() {
  try {
    const response: [] = yield call(get, `${process.env.NEXT_PUBLIC_API_URL}/countries`);
    const transformedResponses = response.map(transformCountryData);
    const obj: { [key: string]: CountryData } = transformedResponses.reduce((acc: { [key: string]: CountryData }, item: CountryData) => {
      acc[item.country] = item;
      return acc;
    }, {});

    yield put(setCountriesCovidData(obj));
  } catch (error) {
    console.error('Veri alınırken hata oluştu:', error);
  }
}

function* fetchTotalCovidData() {
  try {
    const response: TotalData = yield call(get, `${process.env.NEXT_PUBLIC_API_URL}/all`);
    yield put(setTotalCovidData(response));
  } catch (error) {
    console.error('Veri alınırken hata oluştu:', error);
  }
}


function* dataSaga() {
  yield takeLatest('FETCH_COUNTRIES_COVID_DATA', fetchCountriesCovidData);
  yield takeLatest('FETCH_TOTAL_COVID_DATA', fetchTotalCovidData);
}

export default dataSaga;
