
interface IinitalState {
    theme: string
}

const initalState = {
    theme: "light",
    mount: false,
}

export function darkModeReducers(state: IinitalState = initalState, action: any) {

    switch (action.type) {
        case 'CHANGESTYLE': {
            const theme = state.theme === "light"
                ? "dark"
                : "light"
            window.localStorage.setItem('theme', theme)
            return {
                ...state, theme: theme
            }
        }
        case 'SETSTYLE': {
            window.localStorage.setItem('theme', action.theme)
            return {
                ...state, theme: action.theme
            }
        }
        case 'SETMOUNT': {
            return {
                ...state, mount: action.mount
            }
        }
        default:
            return state
    }
}