import React from 'react'
import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'

function HomeScreen() {
    return (
        <div className="section" id="services">
            <div className="container rows">
                <Tabs defaultActiveKey="services" className="tab">
                    <Tab className="tablinks" eventKey="services" title="services">
                        <div className="container rows">
                            <div className="tabcontent" id="London">
                                <div className="row">
                                    <div className="col-lg-4 col-md-4 col-sm-6">
                                        <div className="sectionBox">
                                            <div className="sectionImage">
                                                <i className="fa-solid fa-computer" style={{ fontSize: "40px" }}></i>
                                            </div>
                                            <div className="sectionWords">
                                                <h4>Web Development</h4>
                                                <p>
                                                    Expand your business outreach by capitalizing on web
                                                    development services.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-sm-6">
                                        <div className="sectionBox">
                                            <div className="sectionImage">
                                                <i className="fa-solid fa-computer" style={{ fontSize: "40px" }}></i>
                                            </div>
                                            <div className="sectionWords">
                                                <h4>Mobile Development</h4>
                                                <p>
                                                    Optimize smart ways to deal with the customers.Hire skilled
                                                    mobile app developer.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-sm-6">
                                        <div className="sectionBox">
                                            <div className="sectionImage">
                                                <i className="fa-solid fa-computer" style={{ fontSize: "40px" }}></i>
                                            </div>
                                            <div className="sectionWords">
                                                <h4>PWA development</h4>
                                                <p>
                                                    Progressive Web Apps, it can be said that this is a new
                                                    technology for interacting with the target audience.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-sm-6">
                                        <div className="sectionBox">
                                            <div className="sectionImage">
                                                <i className="fa-solid fa-computer" style={{ fontSize: "40px" }}></i>
                                            </div>
                                            <div className="sectionWords">
                                                <h4>Cross-Platform App</h4>
                                                <p>
                                                    Using React Native and flutter to build single app that
                                                    performs on both Android and iOS.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-sm-6">
                                        <div className="sectionBox">
                                            <div className="sectionImage">
                                                <i className="fa-solid fa-computer" style={{ fontSize: "40px" }}></i>
                                            </div>
                                            <div className="sectionWords">
                                                <h4>UX/UI Designs</h4>
                                                <p>
                                                    intuitive, user-friendly products for the success of your
                                                    business to create a human-friendly visual language.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-sm-6">
                                        <div className="sectionBox">
                                            <div className="sectionImage">
                                                <i className="fa-solid fa-computer" style={{ fontSize: "40px" }}></i>
                                            </div>
                                            <div className="sectionWords">
                                                <h4>Digital Marketing</h4>
                                                <p>
                                                    Data-driven strategies maximize lifecycle value by align
                                                    your technology and marketing execution.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Tab>
                    <Tab className="tablinks" eventKey="technology" title="technology">
                        <div className="container rows">
                            <div className="tabcontent" id="Paris">
                                <div className="row">
                                    <div className="col-lg-4 col-md-4 col-sm-6">
                                        <div className="sectionBox">
                                            <div className="sectionImage">
                                                <i className="fa-solid fa-computer" style={{ fontSize: "40px" }}></i>
                                            </div>
                                            <div className="sectionWords">
                                                <h4>Mobile Development</h4>
                                                <ul>
                                                    <li>Flutter Framework</li>
                                                    <li>Android Apps</li>
                                                    <li>React Native</li>
                                                    <li>Ionic Framework</li>
                                                    <li>Xamarin Framework</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-sm-6">
                                        <div className="sectionBox">
                                            <div className="sectionImage">
                                                <i className="fa-solid fa-computer" style={{ fontSize: "40px" }}></i>
                                            </div>
                                            <div className="sectionWords">
                                                <h4>UX/UI Designs</h4>
                                                <ul>
                                                    <li>Sketch</li>
                                                    <li>Figma</li>
                                                    <li>Flinto</li>
                                                    <li>Adobe XD</li>
                                                    <li>Blender</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-sm-6">
                                        <div className="sectionBox">
                                            <div className="sectionImage">
                                                <i className="fa-solid fa-computer" style={{ fontSize: "40px" }}></i>
                                            </div>
                                            <div className="sectionWords">
                                                <h4>Web Development</h4>
                                                <ul>
                                                    <li>HTML</li>
                                                    <li>CSS</li>
                                                    <li>ReactJs</li>
                                                    <li>Jquery</li>
                                                    <li>JSON</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-sm-6">
                                        <div className="sectionBox">
                                            <div className="sectionImage">
                                                <i className="fa-solid fa-computer" style={{ fontSize: "40px" }}></i>
                                            </div>
                                            <div className="sectionWords">
                                                <h4>E-commerce</h4>
                                                <ul>
                                                    <li>Shopify</li>
                                                    <li>WooCommerce</li>
                                                    <li>Drubal</li>
                                                    <li>Magento</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-sm-6">
                                        <div className="sectionBox">
                                            <div className="sectionImage">
                                                <i className="fa-solid fa-computer" style={{ fontSize: "40px" }}></i>
                                            </div>
                                            <div className="sectionWords">
                                                <h4>Server Side</h4>
                                                <ul>
                                                    <li>Node.js</li>
                                                    <li>PHP</li>
                                                    <li>Express.js Framework</li>
                                                    <li>Laravel Framework</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Tab>
                    <Tab className="tablinks" eventKey="industry" title="industry">
                        <div className="container rows">
                            <div className="tabcontent" id="Tokyo">
                                <div className="row">
                                    <div className="col-lg-4 col-md-4 col-sm-6">
                                        <div className="sectionBox">
                                            <div className="sectionImage">
                                                <i className="fa-solid fa-computer" style={{ fontSize: "40px" }}></i>
                                            </div>
                                            <div className="sectionWords">
                                                <h4>Construction</h4>
                                                <p>
                                                    Advanced software solutions that take Construction into the
                                                    Digital Era.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-sm-6">
                                        <div className="sectionBox">
                                            <div className="sectionImage">
                                                <i className="fa-solid fa-computer" style={{ fontSize: "40px" }}></i>
                                            </div>
                                            <div className="sectionWords">
                                                <h4>Healthcare</h4>
                                                <p>
                                                    Patient-friendly software that empowers healthcare industry
                                                    workers.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-sm-6">
                                        <div className="sectionBox">
                                            <div className="sectionImage">
                                                <i className="fa-solid fa-computer" style={{ fontSize: "40px" }}></i>
                                            </div>
                                            <div className="sectionWords">
                                                <h4>Retail & ECommerce</h4>
                                                <p>
                                                    Engaging and exciting software solutions for modern retail.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-sm-6">
                                        <div className="sectionBox">
                                            <div className="sectionImage">
                                                <i className="fa-solid fa-computer" style={{ fontSize: "40px" }}></i>
                                            </div>
                                            <div className="sectionWords">
                                                <h4>FinTech</h4>
                                                <p>
                                                    Meet the demands of modern customers in speed and security
                                                    with scalable financial technology
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-sm-6">
                                        <div className="sectionBox">
                                            <div className="sectionImage">
                                                <i className="fa-solid fa-computer" style={{ fontSize: "40px" }}></i>
                                            </div>
                                            <div className="sectionWords">
                                                <h4>Travel & Hospitality</h4>
                                                <p>
                                                    Extend the comfort of your resort with practical software
                                                    solutions.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-sm-6">
                                        <div className="sectionBox">
                                            <div className="sectionImage">
                                                <i className="fa-solid fa-computer" style={{ fontSize: "40px" }}></i>
                                            </div>
                                            <div className="sectionWords">
                                                <h4>Logistics</h4>
                                                <p>
                                                    Use all the latest tech available to make your logistics run
                                                    like clockwork.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Tab>
                </Tabs>
            </div>
        </div>
    )
}

export default HomeScreen