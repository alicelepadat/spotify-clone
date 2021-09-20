import React from 'react';

import NavItems from '../Items/NavItems';

import { webItems } from '../Items/items';
import spotifyLogo from '../../../images/Spotify_Logo_RGB_White.webp';

import classes from './Sidebar.module.css';

const Sidebar = () => {
    return <header>
        <nav className={classes["NavToolbar"]}>
            <div className={classes["NavLogo"]}>
                <img
                    alt={"Spotify Logo"}
                    src={spotifyLogo}
                    width={131}
                    height={40}
                />
            </div>
            <NavItems items={webItems} className={classes["NavItem"]}/>
        </nav>
    </header>
}

export default Sidebar;