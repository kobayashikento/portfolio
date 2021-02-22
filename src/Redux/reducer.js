import { combineReducers } from "redux";
import { propertyReducer } from './reducers/propertyReducer';

const reducer = combineReducers({
    propertyReducer
});

export default reducer;