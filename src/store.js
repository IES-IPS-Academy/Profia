import { createStore, combineReducers } from "redux";
const reducers = {};

const rootReducer = combineReducers(reducers);

const configureStore = () => createStore(rootReducer);

export default configureStore;
