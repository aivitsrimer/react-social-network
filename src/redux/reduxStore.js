import {combineReducers, createStore} from "redux";
import navbarReducer from "./navbarReducer";
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    navbar: navbarReducer
});

let store = createStore(reducers);

window.store = store;

export default store;