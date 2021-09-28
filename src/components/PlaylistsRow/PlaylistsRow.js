import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useHistory, useLocation} from "react-router-dom";
import {userPlaylistsActions} from "../../store/user-playlists-slice";

import PlaylistCard from "./PlaylistCard/PlaylistCard";
import PlaylistsHeader from './PlaylistsHeader/PlaylistsHeader';

import classes from './PlaylistsRow.module.css';


export default function PlaylistsRow({categoryTitle, showDescription}) {

    const dispatch = useDispatch();
    const location = useLocation();
    const history = useHistory();
    const className = location.state ? location.state.className : '';

    const userPlaylists = useSelector(state => state.userPlaylists.playlistsData)

    const playlistSelectHandler = (playlistId) => {
        dispatch(userPlaylistsActions.selectPlaylist({playlistId: playlistId}))
        history.push({
            pathname: '/playlist'
        });
    };

    return (
        <div className={classes["PlaylistsContainer"]}>
            <PlaylistsHeader title={categoryTitle}/>

            <div className={`${classes["PlaylistRow"]} ${classes[className]}`}>
                {
                    userPlaylists && userPlaylists.map((playlist, i) => (
                        <div key={i} onClick={() => playlistSelectHandler(playlist.id)}>
                            <PlaylistCard
                                cover={playlist.images[0].url}
                                title={playlist.name}
                                description={showDescription && playlist.description}
                            />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
