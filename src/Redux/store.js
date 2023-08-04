import { applyMiddleware, combineReducers, compose, legacy_createStore as createStore } from "redux";
import { appsListReducer, listMenuReducer, listAppsReducer, imgBannerReducer, contentIntroReducer, detailAppReducer, listWebsReducer, detailWebReducer, listProductsReducer }
    from "./reducers/appsReducers";
import thunk from "redux-thunk";

const initialState = {};
const reducer = combineReducers({
    appLists: appsListReducer,
    menuLists: listMenuReducer,
    contentLists: listAppsReducer,
    imagesBanner: imgBannerReducer,
    contentIntroList: contentIntroReducer,
    detailAppList: detailAppReducer,
    webLists: listWebsReducer,
    detailWebList: detailWebReducer,
    productLists: listProductsReducer
});

const composeEnhance = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    reducer,
    initialState,
    composeEnhance(applyMiddleware(thunk))
);
export default store;