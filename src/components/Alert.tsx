

import * as React from 'react';
import { AlertWarningStyle } from '../styles/styles';


export function Alert() {

    return (
        <React.Fragment>
            <div className="my-5">
                <AlertWarningStyle className="border-l-4 border-orange-500  p-4" role="alert">
                    <p className="font-bold">No Data</p>
                    <p>Sorry for the inconvenience, but we could not find information</p>
                </AlertWarningStyle>
            </div>

        </React.Fragment>
    )
}