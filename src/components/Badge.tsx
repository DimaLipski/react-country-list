import React from 'react'
import { Color } from "./types/colors"
import { BadgeLabel } from './types/labelTypes';

interface IBadge {
    label: BadgeLabel;
    count: number;
    color: Color;
}

export const Badge = ({ label, count, color }: IBadge) => {
    return (
        <span className={`badge bg-${color} col-2 p-2`}>{label}: {count}
        </span>
    );
};