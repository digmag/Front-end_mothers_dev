import { combineReducers, legacy_createStore as createStore, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import userReducer from "../reducers/user-reducer";


const reducers = combineReducers({
    userReducer: userReducer
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;