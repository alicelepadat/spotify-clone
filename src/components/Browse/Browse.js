import React, {useEffect} from 'react';
import {useSelector} from "react-redux";

import PlaylistsRow from "../PlaylistsRow/PlaylistsRow";
import spotifyLogo from '../../images/Spotify_Logo_RGB_White.webp'

import classes from './Browse.module.css';

export default function Browse() {
    const accessToken = useSelector(state => state.auth.accessToken);
    const userPlaylists = useSelector(state=>state.userPlaylists.playlistsData)

    useEffect(() => {
        window.location.hash = '';
    })

    return (
        <div className={classes["Browse"]}>
            {
                !accessToken &&
                <div className={classes["Message"]}>
                    <p>Start listening to your favorite music by hitting the <strong>Log in</strong> button at the top
                        of the page.</p>
                    <div className={classes["Logo"]}>
                        <img alt={"Spotify Logo"}
                             src={spotifyLogo}
                             width={100}
                             height={30}
                        />
                    </div>
                </div>
            }
            {
                accessToken && (
                    userPlaylists &&
                    <PlaylistsRow
                        className={classes["PlaylistRow"]}
                        categoryTitle={"Listen to your playlists"}
                        showDescription={false}
                    />
                )
            }
        </div>
    )
}
