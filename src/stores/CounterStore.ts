import {createStore} from "redux";
import CounterReducer from "../reducers/CounterReducer"

export default createStore(CounterReducer)