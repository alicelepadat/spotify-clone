import React from 'react';

import classes from './PlaylistsHeader.module.css';

export default function PlaylistsHeader({ title, subtitle }) {
    return (
        <div className={classes["Header"]}>
            <h1>{title}</h1>
            {subtitle && <h2>{subtitle}</h2>}
            <button type="button" aria-label={"See all"}>See all</button>
        </div>
    )
}
