import * as React from 'react';
import { CardStyle } from '../styles/styles';
import { numberWithCommas } from '../utils/utils';

export function Card({ text, subText, color }: any) {
    return (
        <div className="w-full md:w-1/3 p-2  justify-center items-center">
            <CardStyle >
                <div className={` text-4xl font-semibold text-${color}-600`}>{numberWithCommas(text)}</div>
                <div className="text-xl font-semibold" >{subText}</div>
            </CardStyle>
        </div>
    )
}

