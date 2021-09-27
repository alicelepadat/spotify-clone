import React from 'react';
import { useSelector } from 'react-redux';

import NavItems from '../Items/NavItems';

import { webItems } from '../Items/items';
import spotifyLogo from '../../../images/Spotify_Logo_RGB_White.webp';

import classes from './Sidebar.module.css';

const Sidebar = () => {
    const userPlaylists = useSelector(state => state.userPlaylists.playlistsData);

    console.log(userPlaylists)
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
            <NavItems items={webItems} className={classes["NavItem"]} />
            {
                userPlaylists &&
                <ul className={classes['UserPlaylists']}>
                    {userPlaylists.map((playlist, i) => (
                        <li className={classes["PlaylistItem"]} key={i} >{playlist.name}</li>
                    ))}
                </ul>
            }
        </nav>
    </header>
}

export default Sidebar;