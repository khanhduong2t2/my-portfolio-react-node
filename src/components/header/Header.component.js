import React from 'react'

function Header() {
    return (
        <header>
            <div className="container">
                <div className="nav">
                    <div className="nav1">
                        <a href="#home">
                            <img src="images/logo-home.jpg" alt="Logo" />
                        </a>
                    </div>
                    <div className="nav2">
                        <div className="menu"><a href="#about">ABOUT ME</a></div>
                        <div className="menu"><a href="#portfolio">PORTFOLIO</a></div>
                        <div className="menu"><a href="#blogs">BLOGS</a></div>
                        <div className="menu"><a href="#contact">CONTACT ME</a></div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header