import React from 'react'

function IntroApp(props) {
    let { img_intro, name, content } = props;
    const items = [];

    for (let index = 0; index < content.length; index++) {
        if (index === 0) {
            items.push(<p key={index}><strong style={{ color: "#00BD00" }}>{name}</strong>{content[index]}</p>);
        } else {
            items.push(<p key={index}>{content[index]}</p>);
        }
    };
    return (
        <>
            <img alt="" src={img_intro}></img>
            <div className="content-intro-app">
                {items}
            </div>
        </>
    )
}

export default IntroApp
