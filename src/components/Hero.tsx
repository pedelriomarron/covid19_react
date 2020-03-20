import * as React from 'react';
import { ReactComponent as Ico } from '../assets/img/iconCovid.svg'
import { SpinStyle } from '../styles/styles';

export function Hero() {
    return (
        <React.Fragment>
            <SpinStyle>
                <Ico />
            </SpinStyle>
        </React.Fragment>
    )
}