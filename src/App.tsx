import React from 'react'
import countries from "./country-data.json";
import { ICountry } from './components/types/types';
import { CountryList } from './components/CountryList';
import { Color } from './components/types/colors';


export const App = () => {
  const transformedCountries: ICountry[]= countries.map(country => {
    return {
      flag: country.flags.svg,
      name: country.name.common,
      capital: country.capital[0],
      region: country.region,
      area: country.area,
      population: country.population,
    };
  });

  return (
    <div className="container">
      <h1 className='p-5 text-danger'>Country List</h1>
      <CountryList countries={transformedCountries} />
    </div>
  );
};

export default App;
