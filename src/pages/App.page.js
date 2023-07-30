import React, { useEffect } from 'react'
import Header from '../components/header/Header.component'
import { useDispatch, useSelector } from 'react-redux';
import { listApps } from '../Redux/actions/appActions';

function AppPage() {
    const contentLists = useSelector((state) => state.contentLists);
    const { loading, error, results } = contentLists;
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(listApps());
    }, [dispatch]);

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

            <div className="container blogcontainer">
                <div className="row">
                    <div className="blogBox col-lg-7 col-md-6 col-sm-6">
                        <div className="blogBox_pic">
                            {/* <img src="https://firebasestorage.googleapis.com/v0/b/save-portfolio.appspot.com/o/portfolio%2Fcalibee_img4.png?alt=media&token=56cd6ec2-2f81-49c0-a978-ae0f318369e5" alt="Logo" /> */}
                            {/* <div className="blogLebal">
                                <a href="#abc">Project Details</a>
                            </div> */}
                            <div className="project-card project-card-2">
                                <div className="title">
                                    <h3>Calibee</h3>
                                    <div className="tech-stack">
                                        <p>NodeJS</p>
                                        <p>SQL</p>
                                    </div>
                                </div>
                                <img src="https://firebasestorage.googleapis.com/v0/b/save-portfolio.appspot.com/o/portfolio%2Fcalibee_img4.png?alt=media&token=56cd6ec2-2f81-49c0-a978-ae0f318369e5" alt="" className="project-img-1" />
                            </div>
                        </div>
                        <div className="blog_text">
                            {
                                loading ? (
                                    <div>
                                        <h1>...</h1>
                                    </div>
                                ) : error ? <h1>!!!</h1>
                                    : (
                                        results.data.data.map((item) => (
                                            <div key={item._id}>
                                                <h3>
                                                    <a href={`#${item.name}`}>{item.name}</a>
                                                </h3>
                                                <p>
                                                    {item.content}
                                                </p>
                                                <span class="fa fa-star checked"></span>
                                                <span class="fa fa-star checked"></span>
                                                <span class="fa fa-star checked"></span>
                                                <span class="fa fa-star checked"></span>
                                                <span class="fa fa-star"></span>
                                                <br />
                                                <a href="https://apps.apple.com/vn/app/calibee/id6443800125">
                                                    <img alt="google_play" src="https://calibee.com/wp-content/uploads/2022/09/Group-1.png"></img>
                                                </a>
                                                <a href="https://play.google.com/store/apps/details?id=com.wolfsolusions.calibee.customer.prod&pli=1">
                                                    <img alt="app_store" src="https://calibee.com/wp-content/uploads/2022/09/Group-2.png"></img>
                                                </a>
                                                <br />
                                                <a href={`/app/${item.key}`}>Let see more <strong>!</strong></a>
                                            </div>
                                        ))
                                    )
                            }
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default AppPage