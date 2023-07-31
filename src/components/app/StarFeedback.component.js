import React from 'react'

function StarFeedback(props) {
    let star_light = props.number_star;
    let star_dark = 5 - props.number_star;
    const items = [];

    for (let index = 0; index < star_light; index++) {
        items.push(<span key={Math.random()} className="fa fa-star checked"></span>);
    };

    for (let index = 0; index < star_dark; index++) {
        items.push(<span key={Math.random()} className="fa fa-star"></span>);
    };

    return (
        <>{items}</>
    )
}

export default StarFeedback