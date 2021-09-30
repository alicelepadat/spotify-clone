import React, {useRef} from 'react';
import {Play} from 'react-feather';
import {useDispatch} from "react-redux";
import {userPlaylistsActions} from "../../../store/user-playlists-slice";

import classes from './PlaylistCard.module.css';

export default function PlaylistCard({cover, title, description, changeBg}) {

    const imgRef = useRef();
    const dispatch = useDispatch();

    const handleMouseEnter = () => {
        if (changeBg) {
            dispatch(userPlaylistsActions.mouseHoverPlaylist());
            localStorage.setItem('current-cover', imgRef.current.src);
        }
    }

    const handleMouseLeave = () => {
        if (changeBg) {
            dispatch(userPlaylistsActions.mouseLeavePlaylist());
            localStorage.removeItem('current-cover');
        }
    }

    return (
        <div className={classes["CardContainer"]}
             onClick={handleMouseLeave}
             onMouseEnter={handleMouseEnter}
             onMouseLeave={handleMouseLeave}>
            <div className={classes["PlaylistCover"]}>
                <img
                    ref={imgRef}
                    className={classes["PlaylistImage"]}
                    src={cover}
                    alt={"Playlist cover"}
                    width={80}
                    height={80}
                />
                <button type="button" className={classes["PlaylistAction"]}>
                    <Play/>
                </button>
            </div>
            <h3 className={classes["PlaylistTitle"]}>{title}</h3>
            {description && <p className={classes["PlaylistDescription"]}>{description}</p>}
        </div>
    )
}
