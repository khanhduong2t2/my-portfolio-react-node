import React from 'react'

function ListFeature(props) {
    let { arr_feature } = props;

    let items = [];
    arr_feature.forEach((item, index) => {
        items.push(<li key={index}>{item}</li>)
    })

    return (
        <>
            {items}
        </>
    )
}

export default ListFeature