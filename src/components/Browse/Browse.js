import React from 'react';

import spotifyLogo from '../../images/Spotify_Logo_RGB_White.webp'

import classes from './Browse.module.css';

export default function Browse({ userId }) {
    return (
        <div className={classes["Browse"]}>
            {
                !userId &&
                <div className={classes["Message"]}>
                    <p>Start listening to your favorite music by hitting the <strong>Log in</strong> button at the top of the page.</p>
                    <div className={classes["Logo"]}>
                        <img alt={"Spotify Logo"}
                            src={spotifyLogo}
                            width={100}
                            height={30}
                        />
                    </div>
                </div>
            }
        </div>
    )
}
