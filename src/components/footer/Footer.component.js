import React from 'react'

function Footer() {
    return (
        <footer>
            <div className="container">
                <div className="footerContainer">
                    <div className="footerLogo">
                        <img src="images/logo-home.jpg" alt="Logo" />
                    </div>
                    <div className="footerNav">
                        <p><a href="#about">About me</a></p>
                        <p><a href="#portifolio">Portifolio</a></p>
                        <p><a href="#blogs">blogs</a></p>
                        <p><a href="#contact">contact me</a></p>
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