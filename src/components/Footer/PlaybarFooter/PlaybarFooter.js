import React, {useState} from 'react';

import classes from './PlaybarFooter.module.css';
import {Play, Pause, SkipBack, SkipForward} from "react-feather";

export default function PlaybarFooter() {

    const [songPlaying, setSongPlaying] = useState(false);
    const [songTime, setSongTime] = useState(0);
    const songDuration = 100;

    const songPlayingHandler = () => {
        setSongPlaying(!songPlaying);
    }

    const songDurationHandler = ev => {
        setSongTime(ev.target.value);
    }

    return (
        <footer className={classes.Footer}>
            <div className={classes["FooterSong"]}>

            </div>
            <div className={classes["FooterPlaybar"]}>
                <div className={classes["PlayActions"]}>
                    <button aria-label={"Skip back"}>
                        <SkipBack/>
                    </button>
                    <button className={classes["PlayBtn"]} aria-label={"Play"} onClick={songPlayingHandler}>
                        {songPlaying ? <Pause/> : <Play/>}
                    </button>
                    <button aria-label={"Skip forward"}>
                        <SkipForward/>
                    </button>
                </div>
                <div className={classes["Playbar"]}>
                    <span id="current-time" className="time">{songTime}</span>
                    <input type="range"
                           className={classes["SoundProgressbar"]}
                           max={songDuration}
                           value={songTime}
                           onChange={songDurationHandler}
                    />
                    <span id="duration" className="time">{songDuration}</span>
                </div>
            </div>
            <div className={classes["FooterActions"]}>

            </div>
        </footer>
    )
}
