import React, {useEffect} from 'react';
import {useSelector} from "react-redux";
import {useDispatch} from "react-redux";
import {userPlaylistsActions} from "../../store/user-playlists-slice";

import PlaylistsRow from "../PlaylistsRow/PlaylistsRow";
import spotifyLogo from '../../images/Spotify_Logo_RGB_White.webp'

import classes from './Browse.module.css';

export default function Browse() {
    const dispatch = useDispatch();

    const accessToken = useSelector(state => state.auth.accessToken);
    const tokenType = useSelector(state => state.auth.tokenType);
    const userPlaylists = useSelector(state=>state.userPlaylists.playlistsData)

    useEffect(() => {
        const fetchPlaylists = async () => {
            const response = await fetch(
                'https://api.spotify.com/v1/me/playlists', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': tokenType + ' ' + accessToken,
                },
            });
            return await response.json();
        };
        accessToken && fetchPlaylists().then(res =>
            dispatch(userPlaylistsActions.getUserPlaylists({
                playlistsData: res.items
            })));
    }, [tokenType, accessToken, dispatch]);

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
                        playlists={userPlaylists}
                        showDescription={false}
                    />
                )
            }
        </div>
    )
}
