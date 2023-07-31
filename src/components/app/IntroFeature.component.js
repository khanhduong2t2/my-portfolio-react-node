import React from 'react'

import ListImage from './ListImage.component'
import ListFeature from './ListFeature.component';

function IntroFeature(props) {
    let { arr_feature } = props;

    let items = [];
    arr_feature.forEach((item, index) => {
        let arr_img = item.arr_img;
        let arr_feature = item.list_feature_en;
        items.push(
            <div key={index}>
                <h4>{item.title_en}</h4>
                <div className="item-feature-app">
                    <ListImage arr_img={arr_img}></ListImage>
                    <ol className="content-feature gradient-list">
                        <ListFeature arr_feature={arr_feature}></ListFeature>
                    </ol>
                </div>
            </div>
        )
    })
    return (
        <>
            {items}
        </>
    )
}

export default IntroFeature