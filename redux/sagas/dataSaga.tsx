import { put, takeLatest, call } from 'redux-saga/effects';
import { setCountriesCovidData } from '../reducers/countriesCovidDataSlice';
import { setcountryCovidData } from '../reducers/countryCovidDataSlice';
import { setTotalCovidData } from '../reducers/totalCovidDataSlice';
import { get } from "../../utils/request.utils";
import { CountryData, CountryParameterData, TotalData } from '@/types/types';

function* fetchCountriesCovidData() {
  try {
    const response: [] = yield call(get, `${process.env.NEXT_PUBLIC_API_URL}/countries`);
    const obj: { [key: string]: CountryData } = response.reduce((acc: { [key: string]: CountryData }, item: CountryData) => {
      acc[item.country] = item;
      return acc;
    }, {});

    yield put(setCountriesCovidData(obj));
  } catch (error) {
    console.error('Veri alınırken hata oluştu:', error);
  }
}

function* fetchCountryCovidData(country: CountryParameterData) {
  try {
    const response: CountryData = yield call(get, `${process.env.NEXT_PUBLIC_API_URL}/countries/${country.payload}`);
    yield put(setcountryCovidData(response))
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
  yield takeLatest('FETCH_COUNTRY_COVID_DATA', fetchCountryCovidData);
  yield takeLatest('FETCH_TOTAL_COVID_DATA', fetchTotalCovidData);
}

export default dataSaga;
