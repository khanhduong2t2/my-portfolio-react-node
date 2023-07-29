import React from 'react'
import Menu from '../header/Menu.component'

import LogoHomeBlack from "../../assets/images/logo-home-black.jpg"

function Footer() {
    return (
        <footer>
            <div className="container">
                <div className="footer footerContainer">
                    <div className="footerLogo">
                        <img src={LogoHomeBlack} alt="Logo" />
                    </div>
                    <div className="footerNav">
                        <Menu bgColor="black"></Menu>
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