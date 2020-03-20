import * as React from 'react';
import { Card } from './Card';
import { StatsStyle, LastUpdateStyle } from '../styles/styles';
import { Alert } from './Alert';

export function Stats({ stats, title }: any) {

    if (typeof stats.confirmed === "undefined") return <Alert />


    return (
        <React.Fragment>
            <div className="p-2">
                <div className="capitalize text-2xl font-semibold text-center">{title}</div>
                <LastUpdateStyle>
                    Last Update: {stats.lastUpdate}
                </LastUpdateStyle>
            </div>

            <StatsStyle>
                <Card text={stats.confirmed.value} subText={"Confirmed"} color={"orange"} />
                <Card text={stats.deaths.value} subText={"Deaths"} color={"red"} />
                <Card text={stats.recovered.value} subText={"Recovered"} color={"green"} />
            </StatsStyle>
        </React.Fragment>


    )
}