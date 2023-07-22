import React from 'react'

function About() {
    return (
        <section id="about">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="aboutMeImg">
                                    <img src="images/image-banner-3.jpg" alt="about me" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="about-me">
                                    <h5>About me</h5>
                                    <div className="aboutHorizontalLine"></div>
                                    <p>
                                        I enjoy creating things that live on the internet, whether
                                        that be websites, applications, or anything in between. My
                                        goal is to always build products that provide pixel-perfect,
                                        performant experiences.
                                    </p>
                                    <p>
                                        Familiarity with Front End High level programming such as
                                        HTML, CSS, ReactJS, XML, jQuery and JSON. Server Side coding
                                        skills Node.js and Php Frameworks( Express.js,Laravel).
                                    </p>
                                    <p>
                                        Understanding of data structures algorithms including data
                                        migration, transformation and analysis. Deploying, managing,
                                        and operating scalable, highly available, and fault tolerant
                                        systems on AWS.
                                    </p>
                                    <p>
                                        Excellent communication skills on both Swahili and English.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}


export default About