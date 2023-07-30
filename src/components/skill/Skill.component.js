import React from 'react'
import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'

function Skill() {
    return (
        <div className="section" id="services">
            <div className="container rows">
                <Tabs defaultActiveKey="skill" className="tab">
                    <Tab className="tablinks" eventKey="skill" title="SKILL">
                        <div className="container rows">
                            <div className="tabcontent" id="skill">
                                <div className="row">
                                    <div className="col-lg-4 col-md-4 col-sm-6">
                                        <div className="sectionBox">
                                            <div className="sectionImage">
                                                <i className="fa-brands fa-react" style={{ fontSize: "40px" }}></i>
                                            </div>
                                            <div className="sectionWords">
                                                <h4>Front-end</h4>
                                                <ul>
                                                    <li>Html, CSS/SCSS, Bootstrap</li>
                                                    <li>JavaScript</li>
                                                    <li>JQuery</li>
                                                    <li>ReactJS, Redux</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-sm-6">
                                        <div className="sectionBox">
                                            <div className="sectionImage">
                                                <i className="fa-brands fa-node-js" style={{ fontSize: "40px" }}></i>
                                            </div>
                                            <div className="sectionWords">
                                                <h4>Back-end</h4>
                                                <ul>
                                                    <li>NodeJS</li>
                                                    <li>ExpressJS Framework</li>
                                                    <li>Python</li>
                                                    <li>Flask Framework</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-sm-6">
                                        <div className="sectionBox">
                                            <div className="sectionImage">
                                                {/* <i className="fa-solid fa-database fa-2xs" style={{ fontSize: "40px" }}></i> */}
                                                <img alt="abc" src="https://firebasestorage.googleapis.com/v0/b/save-portfolio.appspot.com/o/portfolio%2Ficons8-database-50.png?alt=media&token=9558473e-85d1-4338-8b46-30c986c75106"></img>

                                            </div>
                                            <div className="sectionWords">
                                                <h4>Database</h4>
                                                <ul>
                                                    <li>MongoDB</li>
                                                    <li>SQL</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-sm-6">
                                        <div className="sectionBox">
                                            <div className="sectionImage">
                                                {/* <i className="fa-solid fa-code fa-2xs" style={{ fontSize: "40px" }}></i> */}
                                                <i className="fa-brands fa-github" style={{ fontSize: "40px" }}></i>
                                            </div>
                                            <div className="sectionWords">
                                                <h4>Tools</h4>
                                                <ul>
                                                    <li>VSCode</li>
                                                    <li>GitHub</li>
                                                    <li>ChatGPT</li>
                                                    <li>Postman</li>
                                                    <li>Putty</li>
                                                    <li>MySQL Workbench</li>
                                                    <li>MongoDB Compass</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-sm-6">
                                        <div className="sectionBox">
                                            <div className="sectionImage">
                                                {/* <i className="fa-regular fa-cloud" style={{ fontSize: "40px" }}></i> */}
                                                <img alt="abc" src="https://firebasestorage.googleapis.com/v0/b/save-portfolio.appspot.com/o/portfolio%2Fcloud.png?alt=media&token=72b31cce-82e9-4290-b698-2024954a5166"></img>
                                            </div>
                                            <div className="sectionWords">
                                                <h4>Cloud Service</h4>
                                                <ul>
                                                    <li>AWS EC2</li>
                                                    <li>Firebase</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-sm-6">
                                        <div className="sectionBox">
                                            <div className="sectionImage">
                                                <i className="fa-solid fa-chalkboard fa-2xs" style={{ fontSize: "40px" }}></i>
                                            </div>
                                            <div className="sectionWords">
                                                <h4>To learn</h4>
                                                <ul>
                                                    <li>Angular</li>
                                                    <li>NextJS</li>
                                                    <li>GraphQL</li>
                                                    <li>Flutter</li>
                                                    <li>...</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Tab>
                    <Tab className="tablinks" eventKey="experience" title="EXPERIENCE">
                        <div className="container rows">
                            <div className="tabcontent" id="experience">
                                <div className="row">
                                    <ul className="list-experience">
                                        <li style={{ marginTop: '20px' }}><span>4/2020 - 6/2020</span><br />Intern At WATA Solutions Company</li>
                                        <li style={{ marginTop: '20px' }}><span>7/2022 - 8/2023</span><br />Web Developer At Wolf Solutions Company</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </Tab>
                    <Tab className="tablinks" eventKey="education" title="EDUCATION">
                        <div className="container rows">
                            <div className="tabcontent" id="education">
                                <div className="row">
                                    <ul className="list-experience">
                                        <li style={{ marginTop: '20px' }}>
                                            <span>2018 - 2022</span>
                                            <br />Graduated At Van Lang University
                                            <br />- Information Technology -
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </Tab>
                </Tabs>
            </div>
        </div>
    )
}

export default Skill