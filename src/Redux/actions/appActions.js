import axios from 'axios';

import {
    APP_LIST_FAIL, APP_LIST_REQUEST, APP_LIST_SUCCESS,
    LIST_MENU_REQUEST, LIST_MENU_SUCCESS, LIST_MENU_FAIL,
    GET_LIST_APP_REQUEST, GET_LIST_APP_SUCCESS, GET_LIST_APP_FAIL,
    GET_IMG_BANNER_REQUEST, GET_IMG_BANNER_SUCCESS, GET_IMG_BANNER_FAIL,
    GET_CONTENT_INTRO_REQUEST, GET_CONTENT_INTRO_SUCCESS, GET_CONTENT_INTRO_FAIL,
    GET_DETAIL_APP_REQUEST, GET_DETAIL_APP_SUCCESS, GET_DETAIL_APP_FAIL,
} from "../constants/appConstants"

axios.defaults.baseURL = process.env.REACT_APP_ENVIRONMENT === "PRO" ? process.env.REACT_APP_API_URL : process.env.REACT_APP_API_URL_LOCAL;

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

export const contentIntro = (key) => async (dispatch) => {
    dispatch({
        type: GET_CONTENT_INTRO_REQUEST
    });
    try {
        const result = await axios.get(`/v1/portfolio/intro/get-content-intro?key=${key}`);

        dispatch({
            type: GET_CONTENT_INTRO_SUCCESS,
            payload: result,
        })
    } catch (err) {
        dispatch({
            type: GET_CONTENT_INTRO_FAIL,
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

export const detailApp = (key) => async (dispatch) => {
    dispatch({
        type: GET_DETAIL_APP_REQUEST
    });
    try {
        const result = await axios.get(`/v1/portfolio/app/get-detail-app?key=${key}`);

        dispatch({
            type: GET_DETAIL_APP_SUCCESS,
            payload: result,
        })
    } catch (err) {
        dispatch({
            type: GET_DETAIL_APP_FAIL,
            payload: err.message,
        })
    }
}