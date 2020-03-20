import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchStats, setSelectedCountry, fetchCountries } from '../store/actions/fetch';
import { WrapperSelect } from '../styles/styles';
import 'react-flags-select/css/react-flags-select.css';
import Select from 'react-select'
import 'flag-icon-css/css/flag-icon.min.css'
import { components } from 'react-select';
import { useEffect } from 'react';
const API_ENDPOINT = process.env.REACT_APP_API_ENDPOINT as string;


export function CustomSelect() {

    const { selectedCode, countries }: any = useSelector((state: any) => state.stats)
    const dispatch = useDispatch();

    function customFilter(option: any, searchText: any) {
        if (option.data.value.toLowerCase().includes(searchText.toLowerCase()) || option.data.label.toLowerCase().includes(searchText.toLowerCase())) return true;
        else return false;
    }

    const { Option, SingleValue } = components;
    const IconOption = (props: any) => (
        <Option {...props}>
            <div><i className={`flag-icon flag-icon-${props.data.value.toLowerCase()}`}></i> {props.data.label}</div>
        </Option>
    );
    const ValueOption = (props: any) => (
        <SingleValue {...props}>
            <div><i className={`flag-icon flag-icon-${props.data.value.toLowerCase()}`}></i> {props.data.label}</div>
        </SingleValue>
    );


    useEffect(() => {
        const localCode = window.localStorage.getItem('code');
        fetchCountries(dispatch)
        localCode ?
            setSelectedCountry(dispatch, localCode)
            : setSelectedCountry(dispatch, "ES")

    }, [dispatch])


    return (
        <React.Fragment>
            <div>
                {selectedCode !== "" &&
                    <WrapperSelect>
                        <Select classNamePrefix="react-select"
                            components={{ Option: IconOption, SingleValue: ValueOption }}
                            isOptionSelected={(option: any) =>
                                option.value === selectedCode
                            }
                            isLabelSelected={(option: any) =>
                                option.value === selectedCode
                            }
                            value={countries.map((c: any) => selectedCode === c[1] && { value: c[1], label: c[0] })}
                            isSearchable={true}
                            filterOption={customFilter}
                            onInputChange={(option: any) => {
                            }}
                            onChange={(code: any, action: any) => {
                                fetchStats(dispatch, "FETCH_SELECTEDSTATS", `${API_ENDPOINT}/countries/${code.value}`, code.value)
                            }}
                            placeholder={'Search Country'}
                            autoFocus={true}
                            options={countries.map((c: any) => { return { value: c[1], label: c[0] } })}
                            theme={theme => ({
                                ...theme,
                                borderRadius: 0,
                                colors: {
                                    ...theme.colors,
                                    primary25: 'neutral40',
                                    primary: 'black',
                                },
                            })}
                        />
                    </WrapperSelect>
                }
            </div>
        </React.Fragment>
    )

}

