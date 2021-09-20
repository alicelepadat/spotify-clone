import React from 'react';
import { Play } from 'react-feather';

import classes from './Card.module.css';

export default function Card({ cover, title, description }) {
    return (
        <div className={classes["CardContainer"]}>
            <div className={classes["PlaylistCover"]}>
                <img
                    className={classes["PlaylistImage"]}
                    src={cover}
                    alt={"Playlist cover"}
                    width={180}
                    height={180} />
                <button type="button" className={classes["PlaylistAction"]}>
                    <Play />
                </button>
            </div>
            <h3 className={classes["PlaylistTitle"]}>{title}</h3>
            <p className={classes["PlaylistDescription"]}>1{description}</p>
        </div>
    )
}
