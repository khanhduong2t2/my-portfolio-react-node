import {
    APP_LIST_FAIL, APP_LIST_REQUEST, APP_LIST_SUCCESS,
    LIST_MENU_REQUEST, LIST_MENU_SUCCESS, LIST_MENU_FAIL,
    GET_LIST_APP_REQUEST, GET_LIST_APP_SUCCESS, GET_LIST_APP_FAIL,
    GET_IMG_BANNER_REQUEST, GET_IMG_BANNER_SUCCESS, GET_IMG_BANNER_FAIL,
    GET_CONTENT_INTRO_REQUEST, GET_CONTENT_INTRO_SUCCESS, GET_CONTENT_INTRO_FAIL,
    GET_DETAIL_APP_REQUEST, GET_DETAIL_APP_SUCCESS, GET_DETAIL_APP_FAIL,
}
    from "../constants/appConstants"

export const appsListReducer = (
    state = { loading: true, apps: [] },
    action
) => {
    switch (action.type) {
        case APP_LIST_REQUEST:
            return { loading: true };
        case APP_LIST_SUCCESS:
            return { loading: false, apps: action.payload };
        case APP_LIST_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};

export const contentIntroReducer = (
    state = { loading: true, results: [] },
    action
) => {
    switch (action.type) {
        case GET_CONTENT_INTRO_REQUEST:
            return { loading: true };
        case GET_CONTENT_INTRO_SUCCESS:
            return { loading: false, results: action.payload };
        case GET_CONTENT_INTRO_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};

export const listMenuReducer = (
    state = { loading: true, apps: [] },
    action
) => {
    switch (action.type) {
        case LIST_MENU_REQUEST:
            return { loading: true };
        case LIST_MENU_SUCCESS:
            return { loading: false, apps: action.payload };
        case LIST_MENU_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};

export const listAppsReducer = (
    state = { loading: true, results: null },
    action
) => {
    switch (action.type) {
        case GET_LIST_APP_REQUEST:
            return { loading: true };
        case GET_LIST_APP_SUCCESS:
            return { loading: false, results: action.payload };
        case GET_LIST_APP_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};

export const imgBannerReducer = (
    state = { loading: true, results: null },
    action
) => {
    switch (action.type) {
        case GET_IMG_BANNER_REQUEST:
            return { loading: true };
        case GET_IMG_BANNER_SUCCESS:
            return { loading: false, results: action.payload };
        case GET_IMG_BANNER_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};

export const detailAppReducer = (
    state = { loading: true, results: null },
    action
) => {
    switch (action.type) {
        case GET_DETAIL_APP_REQUEST:
            return { loading: true };
        case GET_DETAIL_APP_SUCCESS:
            return { loading: false, results: action.payload };
        case GET_DETAIL_APP_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};