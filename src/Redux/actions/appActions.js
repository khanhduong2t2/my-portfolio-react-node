// import { Axios } from "axios";
import axios from 'axios';

import {
    APP_LIST_FAIL, APP_LIST_REQUEST, APP_LIST_SUCCESS,
    LIST_MENU_REQUEST, LIST_MENU_SUCCESS, LIST_MENU_FAIL,
} from "../constants/appConstants"

export const listApps = () => async (dispatch) => {
    dispatch({
        type: APP_LIST_REQUEST
    });
    try {
        const result = await axios.get("/v1/portfolio/intro/get-content-banner");
        console.log('result: ', result)
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
        console.log('result: ', result)
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