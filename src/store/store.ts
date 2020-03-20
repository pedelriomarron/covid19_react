import { createStore, combineReducers } from 'redux';
import { statsReducers } from './reducers/statsReducers';
import { darkModeReducers } from '../components/DarkModeComponent/reducers/darkModeReducers';

const allReducers = combineReducers({
    stats: statsReducers, darkMode: darkModeReducers
});

const store = createStore(allReducers);
export default store;