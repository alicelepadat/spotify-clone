import React from 'react';

import classes from './PlaylistsHeader.module.css';
import {useHistory} from "react-router-dom";

export default function PlaylistsHeader({title, subtitle}) {

    const history = useHistory();
    const showBtn = history.location.state ? history.location.state.showBtn : true;

    const expandPlaylistsHandler = () => {
        history.push({
            pathname: '/playlists',
            state: {
                className: 'ExpandedPlaylistRow',
                showBtn: false,
            }
        });
    };

    return (
        <div className={classes["Header"]}>
            <h1>{title}</h1>
            {subtitle && <h2>{subtitle}</h2>}
            {showBtn && <button type="button" aria-label={"See all"} onClick={expandPlaylistsHandler}>See all</button>}
        </div>
    )
}
