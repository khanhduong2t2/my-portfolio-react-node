import { Link } from 'react-router-dom';
import React from 'react';

import Menu from './Menu.component';

function Header(props) {
    return (
        <header className={`header header-${props.bgColor || "white"}`}>
            <div className="container container-header">
                <div className="nav">
                    <div className="nav1">
                        <Link to="/">
                            <img src={`images/logo-home-${props.bgColor || "white"}.jpg`} alt="Logo" />
                        </Link>
                    </div>
                    <div className="nav2">
                        <Menu></Menu>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header