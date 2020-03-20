interface IinitalState {
    stats: any
    countries: Array<any>;
    selectedStats: any,
    selectedCode: string
}
const initalState = {
    stats: {},
    countries: [],
    selectedStats: false,
    selectedCode: "",
}

export function statsReducers(state: IinitalState = initalState, action: any) {

    switch (action.type) {
        case 'FETCH_COUNTRIES': {
            return {
                ...state,
                countries: action.countries,
                iso3: action.iso3
            }
        }
        case 'FETCH_SELECTEDSTATS': {
            return {
                ...state,
                selectedStats: action.stats,
                selectedCode: action.code
            }
        }
        case 'FETCH_STATSGLOBAL': {
            return {
                ...state,
                stats: action.stats
            }
        }
        default:
            return state
    }
}