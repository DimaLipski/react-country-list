import React from 'react'
import { ICountry } from './types/types';
import { Badge } from './Badge';


export const CountryItem = ({ name, flag, population, area, capital, region }: ICountry) => {
  return (<li className="list-group-item d-flex justify-content-between">
      <img src={`${flag}`} alt="flag" width="100" height="70" />
      <p>{`${name}`}</p>
      <p>{`${capital}`}</p>
      <p>{`${region}`}</p>
      <Badge area={area} population={population} />
  </li>)
}