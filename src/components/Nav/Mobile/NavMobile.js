import React from "react";

import basicLogo from '../../images/Spotify_Icon_RGB_White.webp';
import {Search, Menu} from "react-feather";

import classes from './Nav.module.css';

const Nav = () => {
    return <header>
        <nav className={classes["NavToolbar"]}>
            <div className={classes["NavLogo"]}>
                <img
                    alt={"Spotify Logo"}
                    src={basicLogo}
                    width={30}
                    height={30}
                />
            </div>
            <div className={classes["NavActions"]}>
                <button
                    className={classes["NavSearch"]}
                    type="button"
                    aria-label={"Search on Spotify"}
                >
                    <Search size={15}/>
                </button>
                <button
                    className={classes["NavExternal"]}
                    type="button"
                    aria-label={"Open App"}
                >
                    Open App
                </button>
                <button
                    className={classes["NavToggle"]}
                    type="button"
                    aria-label={"Nav Toggle"}
                >
                    <Menu/>
                </button>
            </div>
        </nav>
    </header>
}

export default Nav;