import React from 'react'

function LinkStore(props) {
    return (
        <>
            <a href={props.google_play}>
                <img alt="google_play" src="https://calibee.com/wp-content/uploads/2022/09/Group-1.png"></img>
            </a>
            <a href={props.app_store}>
                <img alt="app_store" src="https://calibee.com/wp-content/uploads/2022/09/Group-2.png"></img>
            </a>
        </>
    )
}

export default LinkStore
