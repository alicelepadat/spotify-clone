import React from 'react';
import {Play} from 'react-feather';

import classes from './PlaylistCard.module.css';

export default function PlaylistCard({cover, title, description}) {
    return (
        <div className={classes["CardContainer"]}>
            <div className={classes["PlaylistCover"]}>
                <img
                    className={classes["PlaylistImage"]}
                    src={cover}
                    alt={"Playlist cover"}
                    width={80}
                    height={80}/>
                <button type="button" className={classes["PlaylistAction"]}>
                    <Play/>
                </button>
            </div>
            <h3 className={classes["PlaylistTitle"]}>{title}</h3>
            {description && <p className={classes["PlaylistDescription"]}>{description}</p>}
        </div>
    )
}
