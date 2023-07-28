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
                            <img src="images/calibee/calibee_img4.png" alt="Logo" />
                            {/* <div className="blogLebal">
                                <a href="#abc">Project Details</a>
                            </div> */}
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
                                                <h5>
                                                    <a href={`#${item.name}`}>{item.name}</a>
                                                </h5>
                                                <p>
                                                    {item.content}
                                                </p>
                                                <button type="button" className="btn btn-info">
                                                    <a href={`/app/${item.key}`}>Project Details</a>
                                                </button>
                                            </div>
                                        ))
                                    )
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AppPage