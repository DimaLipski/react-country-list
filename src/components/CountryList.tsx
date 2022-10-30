import React from 'react'
import { ICountry } from './types/types';
import { CountryItem } from './CountryItem';

interface ICountriesList {
    countries: ICountry[],
}

export const CountryList = ({ countries }: ICountriesList) => {
    const transformCountryItems = countries.map(country => {
        return (<CountryItem
            {...country}
        />)
    })
    return (
        <ul className="list-group">
            {transformCountryItems}
        </ul>
    )
}
