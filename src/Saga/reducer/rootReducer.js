import { combineReducers } from "redux";
import countReducer from "./reducerCounter";

const root=combineReducers({
    countReducer
})

export default root 