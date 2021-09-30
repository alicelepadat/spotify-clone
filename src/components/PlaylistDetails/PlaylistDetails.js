/* eslint-disable */

import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useLocation} from "react-router-dom";

import BASE_URL from '../../utils/api-url';
import PlaylistHeader from "./PlaylistHeader/PlaylistHeader";
import PlaylistItems from "./PlaylistItems/PlaylistItems";
import {Pause, Play} from "react-feather";

import savedTracksCover from '../../images/liked-songs-640.png';

import classes from './PlaylistDetails.module.css';
import {userPlaylistsActions} from "../../store/user-playlists-slice";

const PlaylistDetails = () => {
    const location = useLocation();
    const dispatch = useDispatch();

    const selectedPlaylistId = useSelector(state => state.userPlaylists.selectedPlaylistId);
    const tokenType = useSelector(state => state.auth.tokenType);
    const token = useSelector(state => state.auth.accessToken);
    const userSavedTracks = useSelector(state => state.userPlaylists.userSavedTracks);

    const [playlistImage, setPlaylistImage] = useState('');
    const [playlistTitle, setPlaylistTitle] = useState('');
    const [playlistDescription, setPlaylistDescription] = useState('');
    const [playlistItems, setPlaylistItems] = useState([]);
    const [playingStatus, setPlayingStatus] = useState(false);

    const playSongsHandler = () => {
        setPlayingStatus(!playingStatus);
    }

    useEffect(() => {
        if (selectedPlaylistId) {
            window.location.hash = selectedPlaylistId;
        }
    }, [selectedPlaylistId])

    useEffect(() => {
        const fetchPlaylistItems = async () => {
            const response = await fetch(`${BASE_URL}/playlists/${selectedPlaylistId}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': tokenType + ' ' + token,
                }
            });

            return await response.json();
        }
        selectedPlaylistId &&
        fetchPlaylistItems()
            .then(res => {
                setPlaylistImage(res.images[0].url);
                setPlaylistTitle(res.name);
                setPlaylistDescription(res.description);
                setPlaylistItems(res.tracks.items);
            });
    }, [selectedPlaylistId]);

    useEffect(() => {
        if (location.state) {
            if (selectedPlaylistId) {
                dispatch(userPlaylistsActions.unselectPlaylist());
            }
            setPlaylistImage(savedTracksCover);
            setPlaylistTitle("Liked Songs");
            setPlaylistItems(userSavedTracks);
        }
    }, [location.state]);

    return <div className={classes["PlaylistItemsContainer"]}>
        <PlaylistHeader
            image={playlistImage}
            title={playlistTitle}
            description={playlistDescription}
            size={playlistItems.length}
        />
        <div className={classes["ContentSpacing"]}>
            <button className={classes["PlayingBtn"]} type={'button'} onClick={playSongsHandler}>{playingStatus ?
                <Pause/> : <Play/>}</button>
        </div>
        <PlaylistItems items={playlistItems}/>
    </div>
};

export default PlaylistDetails;