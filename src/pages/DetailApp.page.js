import React, { useEffect } from 'react'

import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { detailApp } from '../Redux/actions/appActions';

import Header from '../components/header/Header.component'
import IntroApp from '../components/app/IntroApp.component'
import IntroFeature from '../components/app/IntroFeature.component'

function DetailApp() {
    let { key } = useParams();
    const detailAppList = useSelector((state) => state.detailAppList);
    const { loading, error, results } = detailAppList;
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(detailApp(key));
    }, [dispatch, key]);

    let str_title = "Một số tính năng nổi bật";

    return (
        <>
            <Header bgColor="black"></Header>
            {
                loading ? (
                    <div>
                        <h1>...</h1>
                    </div>
                ) : error ? <h1>!!!</h1>
                    : (
                        results.data.data.map((item) => (
                            <div key={item._id}>
                                <div className="intro-detail-app">
                                    <IntroApp img_intro={item.img_intro} name={item.name} content={item.content}></IntroApp>
                                </div>
                                <div className="feature-app">
                                    <h2>{str_title}</h2>
                                    <IntroFeature arr_feature={item.arr_feature}></IntroFeature>
                                </div>
                            </div>
                        )))
            }
        </>
    )
}

export default DetailApp