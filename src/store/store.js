import { combineReducers, legacy_createStore as createStore, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import userReducer from "../reducers/user-reducer";
import clientReducer from "../reducers/client-reducer";
import contractReducer from "../reducers/contract-reducer";

const reducers = combineReducers({
    userReducer: userReducer,
    clientReducer: clientReducer,
    contractReducer: contractReducer
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;