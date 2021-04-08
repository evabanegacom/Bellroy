import { combineReducers } from 'redux';
import resultsReducer from './resultReducer';

const rootReducer = combineReducers({
    results: resultsReducer
})

export default rootReducer;