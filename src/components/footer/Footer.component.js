import React from 'react'
// import { Link } from 'react-router-dom'
// import { HashLink } from 'react-router-hash-link'
import Menu from '../header/Menu.component'

function Footer() {
    return (
        <footer>
            <div className="container">
                <div className="footer footerContainer">
                    <div className="footerLogo">
                        <img src="images/logo-home-black.jpg" alt="Logo" />
                    </div>
                    <div className="footerNav">
                        <Menu></Menu>
                        {/* <div>
                            <p><Link to="/my-cv">My CV</Link></p>
                            <p><Link to="/blogs">Blogs</Link></p>
                            <p><HashLink to="/#about">About me</HashLink></p>
                            <p><HashLink to="/#contact">Contact me</HashLink></p>
                        </div> */}
                    </div>
                    <div className="footerMedias">
                        <div className="footerMedia">
                            <a href="https://www.facebook.com/profile.php?id=100010132386550">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                        </div>
                        <div className="footerMedia">
                            <a href="https://www.instagram.com/ckhduong__/?fbclid=IwAR269EDfPhdQTwZGaIuKPd98VQaRJSHXeQ-jcKebFWMYLSX_eG8DqODXCNQ">
                                <i className="fab fa-instagram"></i>
                            </a>
                        </div>
                        <div className="footerMedia">
                            <a href="https://github.com/khanhduong2t2">
                                <i className="fab fa-github-alt"></i>
                            </a>
                        </div>
                    </div>
                    <span>Copyright ©2023 All rights ... </span>
                </div>
            </div>
        </footer>
    )
}


export default Footer