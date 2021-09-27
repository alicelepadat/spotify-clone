import React from 'react';

import Button from '../../UI/Button/Button';
import {loginHandler} from '../../../utils/functions';
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
            <Button
                aria-label={"Log in"}
                onClick={loginHandler}
            >
                Log in
            </Button>
        </div>
    </div>

}

export default TopBar;