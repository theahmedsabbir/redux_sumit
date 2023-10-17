import { combineReducers } from "redux";
import counterReducer from "./counter/counterReducer";
import counterReducer2 from "./counter2/counterReducer";


const rootReducer = combineReducers({
    counter1: counterReducer,
    counter2: counterReducer2,
})

export default rootReducer