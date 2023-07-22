import React from 'react'
import { HashLink } from 'react-router-hash-link'
import { Link } from 'react-router-dom'

function Header(props) {
    return (
        <header className={`header-${props.bgColor || "white"}`}>
            <div className="container container-header">
                <div className="nav">
                    <div className="nav1">
                        <Link to="/">
                            <img src={`images/logo-home-${props.bgColor || "white"}.jpg`} alt="Logo" />
                            {/* <img src="images/logo-home-black.jpg" alt="Logo" /> */}
                        </Link>
                    </div>
                    <div className="nav2">
                        <div className={`menu w-${props.bgColor || "white"}`}><Link to="/my-cv">MY CV</Link></div>
                        <div className={`menu w-${props.bgColor || "white"}`}><Link to="/blogs">BLOGS</Link></div>
                        <div className={`menu w-${props.bgColor || "white"}`}><HashLink to="/#about">ABOUT ME</HashLink></div>
                        <div className={`menu w-${props.bgColor || "white"}`}><HashLink to="/#contact">CONTACT ME</HashLink></div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header