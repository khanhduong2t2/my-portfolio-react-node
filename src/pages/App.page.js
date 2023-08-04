import React, { useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux';
import { listApps } from '../Redux/actions/appActions';

import Header from '../components/header/Header.component'
import LinkStore from '../components/app/LinkStore.component'
import StarFeedback from '../components/app/StarFeedback.component'

function AppPage() {
    const contentLists = useSelector((state) => state.contentLists);
    const { loading, error, results } = contentLists;
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(listApps());
    }, [dispatch]);
    return (
        <>
            <Header bgColor="black"></Header>
            <div className="banner">
                <div className="overlay">
                    <div className="container-app">
                        <p style={{ "zIndex": "4" }}>Mobile Apps</p>
                    </div>
                </div>
            </div>

            <div className="container blogcontainer">
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

                                            <div className="project-card project-card-2">
                                                <div className="title">
                                                    <h3>{item.name.split('-')[0]}</h3>
                                                    <div className="tech-stack">
                                                        {item.arr_language.map((item, index) => (
                                                            <p key={index}>{item}</p>
                                                        ))}
                                                    </div>
                                                </div>
                                                <img src="https://firebasestorage.googleapis.com/v0/b/save-portfolio.appspot.com/o/portfolio%2Fcalibee_img4.png?alt=media&token=56cd6ec2-2f81-49c0-a978-ae0f318369e5" alt="" className="project-img-1" />
                                            </div>
                                        </div>
                                        <div className="blog_text">
                                            <div key={item._id}>
                                                <h3>
                                                    <a href={`/app/${item.key}`}>{item.name}</a>
                                                </h3>
                                                <p>
                                                    {item.content}
                                                </p>
                                                <StarFeedback key={item._id} number_star={item.number_star}></StarFeedback>
                                                <br />
                                                <LinkStore app_store={item.arr_link[1]} google_play={item.arr_link[0]}></LinkStore>
                                                <br />
                                                <a href={`/app/${item.key}`}>Let see more <strong>!</strong></a>
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

export default AppPage