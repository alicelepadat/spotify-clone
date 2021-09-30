import React from 'react';
import {useDispatch} from "react-redux";
import {useHistory, useLocation} from "react-router-dom";
import {userPlaylistsActions} from "../../store/user-playlists-slice";

import PlaylistCard from "./PlaylistCard/PlaylistCard";
import PlaylistsHeader from './PlaylistsHeader/PlaylistsHeader';

import savedTracksCover from '../../images/liked-songs-640.png';

import classes from './PlaylistsRow.module.css';


export default function PlaylistsRow({showLiked, playlists, categoryTitle}) {

    const dispatch = useDispatch();
    const location = useLocation();
    const history = useHistory();
    const className = location.state ? location.state.className : '';

    const playlistsData = location.state ? location.state.playlists : playlists;

    const playlistSelectHandler = (playlistId) => {
        if (playlistId) {
            dispatch(userPlaylistsActions.selectPlaylist({playlistId: playlistId}));
            history.push({
                pathname: '/playlist',
            });
        } else {
            dispatch(userPlaylistsActions.unselectPlaylist());
            history.push({
                pathname: '/playlist',
                state: true,
            });
        }
    };

    return (
        <div className={classes["PlaylistsContainer"]}>
            <PlaylistsHeader title={categoryTitle} playlists={playlists}/>

            <div className={`${classes["PlaylistRow"]} ${classes[className]}`}>
                {
                    showLiked &&
                    <div onClick={() => playlistSelectHandler(null)}>
                        <PlaylistCard
                            cover={savedTracksCover}
                            title={'Liked songs'}
                        />
                    </div>
                }
                {
                    playlistsData && playlistsData.map((playlist, i) => (
                        <div key={i} onClick={() => playlistSelectHandler(playlist.id)} style={{height: 'fit-content'}}>
                            <PlaylistCard
                                cover={playlist.images[0].url}
                                title={playlist.name}
                                description={playlist.description}
                                changeBg={showLiked}
                            />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
