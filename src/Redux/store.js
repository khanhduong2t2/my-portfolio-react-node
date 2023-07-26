import { applyMiddleware, combineReducers, compose, legacy_createStore as createStore } from "redux";
import { appsListReducer, listMenuReducer } from "./reducers/appsReducers";
import thunk from "redux-thunk";

const initialState = {};
const reducer = combineReducers({
    appLists: appsListReducer,
    menuLists: listMenuReducer
});

const composeEnhance = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const composeEnhance = compose;

// const middleware = [thunk];
const store = createStore(
    reducer,
    initialState,
    composeEnhance(applyMiddleware(thunk))
    // applyMiddleware(...middleware)
);
export default store;