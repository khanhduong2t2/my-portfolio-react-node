import React, { useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux';
import { listWebs } from '../Redux/actions/appActions';

import Header from '../components/header/Header.component'
import LinkStore from '../components/app/LinkStore.component'

function WebsitePage() {
    const webLists = useSelector((state) => state.webLists);
    const { loading, error, results } = webLists;
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(listWebs());
    }, [dispatch]);
    console.log('results: ', results)
    return (
        <>
            <Header bgColor="white"></Header>
            {/* <div className="banner">
                <div className="overlay">
                    <div className="container">
                        <h1>My Recent Mobile Apps</h1>
                    </div>
                </div>
            </div> */}

            <div className="container webcontainer">
                <div className="row">
                    {
                        loading ? (
                            <div>
                                <h1>...</h1>
                            </div>
                        ) : error ? <h1>!!!</h1>
                            : (
                                results.data.data.map((item) => (
                                    <div className="blogBox col-lg-7 col-md-6 col-sm-6" key={item._id}>
                                        <div className="blogBox_pic">
                                            {/* <img src="https://firebasestorage.googleapis.com/v0/b/save-portfolio.appspot.com/o/portfolio%2Fcalibee_img4.png?alt=media&token=56cd6ec2-2f81-49c0-a978-ae0f318369e5" alt="Logo" /> */}
                                            {/* <div className="blogLebal">
                                                    <a href="#abc">Project Details</a>
                                                </div> */}

                                            <div className="project-card project-card-2" style={{ "background": `linear-gradient(225deg, ${item.color}, ${item.color})` }}>
                                                <div className="title">
                                                    <h3>{item.name.split('-')[0]}</h3>
                                                    <div className="tech-stack">
                                                        {item.arr_language.map((item, index) => (
                                                            <p key={index}>{item}</p>
                                                        ))}
                                                    </div>
                                                </div>
                                                <img src={item.img_intro} alt="" className="project-img-2" />
                                            </div>
                                        </div>
                                        <div className="blog_text">
                                            <div key={item._id}>
                                                <h3>
                                                    <a style={{ "color": `${item.color}` }} href={`#${item.name}`}>{item.name}</a>
                                                </h3>
                                                <p>
                                                    {item.content}
                                                </p>
                                                <LinkStore link_website={item.arr_link[0]} color={item.color}></LinkStore>
                                                <br />
                                            </div>

                                        </div>
                                    </div>
                                ))
                            )
                    }
                </div>
            </div >
        </>
    )
}

export default WebsitePage