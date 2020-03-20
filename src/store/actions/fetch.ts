export const fetchStats = (dispatch: any, type: string, url: string, code: string = "") => {
    code !== "" && window.localStorage.setItem('code', code)

    fetch(url)
        .then(res => res.json())
        .then(res => dispatch({ type: type, stats: res, code }))
};

export const fetchCountries = (dispatch: any) => {
    fetch('https://covid19.mathdro.id/api/countries')
        .then(res => res.json())
        .then(res => dispatch({ type: "FETCH_COUNTRIES", countries: Object.entries(res.countries), iso3: res.iso3 }))
};

export const setSelectedCountry = (dispatch: any, code: string) => {
    fetchStats(dispatch, "FETCH_SELECTEDSTATS", `https://covid19.mathdro.id/api/countries/${code}`, code)
}