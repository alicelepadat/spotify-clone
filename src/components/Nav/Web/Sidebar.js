import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useHistory} from "react-router-dom";

import NavItems from '../Items/NavItems';

import {webItems} from '../Items/items';
import spotifyLogo from '../../../images/Spotify_Logo_RGB_White.webp';

import classes from './Sidebar.module.css';
import {userPlaylistsActions} from "../../../store/user-playlists-slice";

const Sidebar = () => {
    const history = useHistory();
    const dispatch = useDispatch();

    const userPlaylists = useSelector(state => state.userPlaylists.playlistsData);

    const goHomeHandler = () => {
        history.push({
            pathname: '/menu',
            state: undefined,
        });
        dispatch(userPlaylistsActions.unselectPlaylist());
    }

    const playlistSelectHandler = (playlistId) => {
        dispatch(userPlaylistsActions.selectPlaylist({playlistId: playlistId}))
        history.push({
            pathname: '/playlist'
        });
    };

    return <header>
        <nav className={classes["NavToolbar"]}>
            <div className={classes["NavLogo"]} onClick={goHomeHandler}>
                <img
                    alt={"Spotify Logo"}
                    src={spotifyLogo}
                    width={131}
                    height={40}
                />
            </div>
            <NavItems items={webItems} className={classes["NavItem"]}/>
            {
                userPlaylists &&
                <ul className={classes['UserPlaylists']}>
                    {userPlaylists.map((playlist, i) => (
                        <li className={classes["PlaylistItem"]} key={i}  onClick={() => playlistSelectHandler(playlist.id)}>{playlist.name}</li>
                    ))}
                </ul>
            }
        </nav>
    </header>
}

export default Sidebar;