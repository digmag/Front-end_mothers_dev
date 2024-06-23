import { combineReducers, legacy_createStore as createStore, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import userReducer from "../reducers/user-reducer";
import clientReducer from "../reducers/client-reducer";


const reducers = combineReducers({
    userReducer: userReducer,
    clientReducer: clientReducer
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;