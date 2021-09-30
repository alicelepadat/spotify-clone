import React, {useEffect, useRef} from 'react';
import {useSelector} from "react-redux";
import {useLocation} from "react-router-dom";
import useImageColor from "use-image-color";

import FeaturedPlaylists from "../FeaturedPlaylists/FeaturedPlaylists";
import PlaylistsRow from "../PlaylistsRow/PlaylistsRow";
import spotifyLogo from '../../images/Spotify_Logo_RGB_White.webp'

import classes from './Browse.module.css';

export default function Browse() {

    const accessToken = useSelector(state => state.auth.accessToken);
    const userPlaylists = useSelector(state => state.userPlaylists.playlistsData)

    useEffect(() => {
        window.location.hash = '';
    });

    const location = useLocation();
    const browseRef = useRef();

    const currentImg = localStorage.getItem('current-cover');
    const {colors} = useImageColor(currentImg, {cors: true, colors: 2});
    const playlistHover = useSelector(state => state.userPlaylists.playlistCoverHover);

    useEffect(() => {
        if (location.pathname === '/menu') {
            if (playlistHover && colors) {
                if (browseRef.current) {
                    browseRef.current.style.backgroundColor = `${colors[0]}`;
                }
            } else {
                if (browseRef.current) {
                    browseRef.current.style.backgroundColor = 'rgb(124, 109, 232)';
                }
            }
        }
    }, [playlistHover, browseRef, colors, location]);

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
                    <div ref={browseRef} className={classes["BrowseMainSection"]}>
                        <PlaylistsRow
                            className={classes["PlaylistRow"]}
                            playlists={userPlaylists}
                            categoryTitle={"Listen to your playlists"}
                            showLiked={true}
                        />
                    </div>
                )
            }
            {
                accessToken && <FeaturedPlaylists/>
            }
        </div>
    )
}
