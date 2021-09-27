import React from 'react';
// import PlaylistCard from '../UI/PlaylistCard/PlaylistCard';

import PlaylistsHeader from './PlaylistsHeader/PlaylistsHeader';

import classes from './PlaylistsRow.module.css';

export default function PlaylistsRow({playlists, categoryTitle}) {
    return (
        <div className={classes["PlaylistsContainer"]}>
            <PlaylistsHeader title={categoryTitle}/>

            <div className={classes["PlaylistRow"]}>
                {
                    // playlists.map((playlist, i) => (
                    //     <PlaylistCard key={i} cover={playlist.cover} title={playlist.title} description={playlist.description} />
                    // ))
                }
            </div>
        </div>
    )
}
