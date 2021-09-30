import React from "react";

import classes from "./PlaylistHeader.module.css";

const PlaylistHeader = ({image, title, description, size}) => {
    return <div className={classes["PlaylistHeader"]}>
        <div className={classes["PlaylistImage"]}>
            <img src={image}
                 alt={title}
                 width={192}
                 height={192}
            />
        </div>
        <div className={classes["PlaylistDetails"]}>
            <p>PLAYLIST</p>
            <h1>{title}</h1>
            {description.length > 0 && description}
            <p>{size} songs</p>
        </div>
    </div>
}

export default PlaylistHeader;