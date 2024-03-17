export type CountryData = {
  active: number;
  activePerOneMillion: number;
  cases: number;
  casesPerOneMillion: number;
  continent: string;
  country: string;
  countryInfo: {
    iso2: string;
    iso3: string;
    flag: string;
    lat: number;
    long: number;
    _id: number;
  };
  critical: number;
  criticalPerOneMillion: number;
  deaths: number;
  deathsPerOneMillion: number;
  oneCasePerPeople: number;
  oneDeathPerPeople: number;
  oneTestPerPeople: number;
  population: number;
  recovered: number;
  recoveredPerOneMillion: number;
  tests: number;
  testsPerOneMillion: number;
  todayCases: number;
  todayDeaths: number;
  todayRecovered: number;
  updated: number;
  message?: string;
};



export type TotalData = {
  updated: number;
  cases: number;
  todayCases: number;
  deaths: number;
  todayDeaths: number;
  recovered: number;
  todayRecovered: number;
  active: number;
  critical: number;
  casesPerOneMillion: number;
  deathsPerOneMillion: number;
  tests: number;
  testsPerOneMillion: number;
  population: number;
  oneCasePerPeople: number;
  oneDeathPerPeople: number;
  oneTestPerPeople: number;
  activePerOneMillion: number;
  recoveredPerOneMillion: number;
  criticalPerOneMillion: number;
  affectedCountries: number;
};

export type CountryParameterData = {
  type: string,
  payload: string
}

export type PageTitleProps = {
  title: string;
  date: string;
}

export type CounterProps = {
  from: number;
  to: number;
}

export type DetailPageProps = {
  params: {
    country: string;
  };
  searchParams: string;
}

export type RootLayoutProps = {
  children: React.ReactNode;
}


export type LeafletMapProps = {
  coord: [number, number];
  country: string,
}