import axios from 'axios';

import {
    APP_LIST_FAIL, APP_LIST_REQUEST, APP_LIST_SUCCESS,
    LIST_MENU_REQUEST, LIST_MENU_SUCCESS, LIST_MENU_FAIL,
    GET_LIST_APP_REQUEST, GET_LIST_APP_SUCCESS, GET_LIST_APP_FAIL,
    GET_IMG_BANNER_REQUEST, GET_IMG_BANNER_SUCCESS, GET_IMG_BANNER_FAIL,
} from "../constants/appConstants"

export const listContents = () => async (dispatch) => {
    dispatch({
        type: APP_LIST_REQUEST
    });
    try {
        const result = await axios.get("/v1/portfolio/intro/get-content-banner");
        dispatch({
            type: APP_LIST_SUCCESS,
            payload: result,
        })
    } catch (err) {
        dispatch({
            type: APP_LIST_FAIL,
            payload: err.message,
        })
    }
}

export const listMenu = () => async (dispatch) => {
    dispatch({
        type: LIST_MENU_REQUEST
    });
    try {
        const result = await axios.get("/v1/portfolio/common/get-menu");
        dispatch({
            type: LIST_MENU_SUCCESS,
            payload: result,
        })
    } catch (err) {
        dispatch({
            type: LIST_MENU_FAIL,
            payload: err.message,
        })
    }
}

export const listApps = () => async (dispatch) => {
    dispatch({
        type: GET_LIST_APP_REQUEST
    });
    try {
        const result = await axios.get("/v1/portfolio/app/get-list-app");
        dispatch({
            type: GET_LIST_APP_SUCCESS,
            payload: result,
        })
    } catch (err) {
        dispatch({
            type: GET_LIST_APP_FAIL,
            payload: err.message,
        })
    }
}

export const imgBanner = (key) => async (dispatch) => {
    dispatch({
        type: GET_IMG_BANNER_REQUEST
    });
    try {
        const result = await axios.get(`/v1/portfolio/common/get-url-image?key=${key}`);
        dispatch({
            type: GET_IMG_BANNER_SUCCESS,
            payload: result,
        })
    } catch (err) {
        dispatch({
            type: GET_IMG_BANNER_FAIL,
            payload: err.message,
        })
    }
}