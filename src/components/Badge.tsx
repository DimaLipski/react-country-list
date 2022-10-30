import React from 'react'
import { Color } from "./types/colors"
import { IBadge } from './types/types'

// interface Ibadge {
//     population: number,
//     area: number,
// }

export const Badge = ({ area, population }: IBadge) => {
    return (
        <>
            <span className={`badge text-bg-${Color.Primary} `}>{`area: ${area}`}</span>
            <span className={`badge text-bg-${Color.Secondary}`}>{`population: ${population}`}</span>
        </>
    )
}