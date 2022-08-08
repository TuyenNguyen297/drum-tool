import { combineReducers } from "redux";
import powerReducer from "./powerReducer.js";
import bankReducer from "./bankReducer";
import volumeReducer from "./volumeReducer";
import padReducer from "./padReducer";


export default combineReducers({
    power: powerReducer,
    bank: bankReducer,
    volume: volumeReducer,
    pad: padReducer
})