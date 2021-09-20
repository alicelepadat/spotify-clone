import React from 'react';

import { ChevronLeft, ChevronRight } from "react-feather";

import classes from './TopBar.module.css';

const TopBar = () => {
    return <div className={classes["NavHeader"]}>
        <div className={classes["NavArrows"]}>
            <button
                type={'button'}
                className={classes["NavLeftArrow"]}
                aria-label={"Go Back"}
            >
                <ChevronLeft />
            </button>
            <button
                type={'button'}
                className={classes["NavRightArrow"]}
                aria-label={"Go Forward"}
            >
                <ChevronRight />
            </button>
        </div>
        <div className={classes["NavActions"]}>
            <button
                type={'button'}
                className={classes["NavSignup"]}
                aria-label={"Sign up"}
            >
                Sign up
            </button>
            <button
                type={'button'}
                className={classes["NavLogin"]}
                aria-label={"Log in"}
            >
                Log in
            </button>
        </div>
    </div>

}

export default TopBar;