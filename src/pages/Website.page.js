import React from 'react'
import Header from '../components/header/Header.component'

function WebsitePage() {
    return (
        <>
            <Header></Header>
            <div className="banner">
                <div className="overlay">
                    <div className="container">
                        <h1>My Recent Websites</h1>
                        <button>
                            <a href="#abc">Home</a>
                        </button>
                    </div>
                </div>
            </div>

            <div className="container blogcontainer">
                <div className="row">
                    <div className="blogBox col-lg-4 col-md-6 col-sm-6">
                        <div className="blogBox_pic">
                            <img src="" alt="" />
                            <div className="blogLebal">
                                <a href="#abc">Project Details</a>
                            </div>
                        </div>
                        <div className="blog_text">
                            <ul>
                                <li><i className="far fa-calendar"></i> 12 May 2021</li>
                            </ul>
                            <h5>
                                <a href="#abc">Sell & Bull App</a>
                            </h5>
                            <p>
                                I enjoy creating things that live on the internet, whether that be
                                websites, applications, or anything in between...
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default WebsitePage