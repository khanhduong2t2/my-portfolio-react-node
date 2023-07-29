import { Link } from 'react-router-dom';
import React from 'react';
import LogoHomeBlack from "../../assets/images/logo-home-black.jpg";
import LogoHomeWhite from "../../assets/images/logo-home-white.jpg";

import Menu from './Menu.component';

function Header(props) {
    return (
        <header className={`header header-${props.bgColor || "white"}`}>
            <div className="container container-header">
                <div className="nav">
                    <div className="nav1">
                        <Link to="/">
                            {props.bgColor === "black" ?
                                <img src={LogoHomeBlack} alt="Logo" />
                                :
                                <img src={LogoHomeWhite} alt="Logo" />
                            }
                        </Link>
                    </div>
                    <div className="nav2">
                        <Menu bgColor={props.bgColor}></Menu>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header