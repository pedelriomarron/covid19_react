import * as React from 'react';
import { useSelector, } from 'react-redux';
import { Stats } from './Stats';
import 'flag-icon-css/css/flag-icon.min.css'
import { CustomSelect } from './CustomSelect';



export function CountySelector() {
    const { selectedStats }: any = useSelector((state: any) => state.stats)

    return (
        <React.Fragment>
            <CustomSelect />
            <Stats stats={selectedStats} />
        </React.Fragment>
    )
}