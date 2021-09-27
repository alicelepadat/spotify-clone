import React from 'react';
import PlaylistCard from "./PlaylistCard/PlaylistCard";

import PlaylistsHeader from './PlaylistsHeader/PlaylistsHeader';

import classes from './PlaylistsRow.module.css';

export default function PlaylistsRow({playlists, categoryTitle, showDescription}) {
    return (
        <div className={classes["PlaylistsContainer"]}>
            <PlaylistsHeader title={categoryTitle}/>

            <div className={classes["PlaylistRow"]}>
                {
                    playlists.map((playlist, i) => (
                        <div key={i}>
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
