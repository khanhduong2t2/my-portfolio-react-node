import React from 'react'

function LinkStore(props) {
    let items = [];
    if (props.google_play) {
        items.push(
            <a key="google_play" href={props.google_play}>
                <img alt="google_play" src="https://calibee.com/wp-content/uploads/2022/09/Group-1.png"></img>
            </a>
        )
    };

    if (props.app_store) {
        items.push(
            <a key="app_store" href={props.app_store}>
                <img alt="app_store" src="https://calibee.com/wp-content/uploads/2022/09/Group-2.png"></img>
            </a>
        )
    }

    if (props.link_website) {
        items.push(
            <a key="website" href={props.link_website}>
                <button type="button" className="btn btn-primary btn-visit-website" style={{ "background-color": `${props.color}` }}>Visit Website</button>
            </a>
        )
    }

    return (
        <>
            {items}
        </>
    )
}

export default LinkStore
