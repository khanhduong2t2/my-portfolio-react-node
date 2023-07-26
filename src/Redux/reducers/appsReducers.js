import {
    APP_LIST_FAIL, APP_LIST_REQUEST, APP_LIST_SUCCESS,
    LIST_MENU_REQUEST, LIST_MENU_SUCCESS, LIST_MENU_FAIL
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