import React from 'react';

import Button from '../../UI/Button/Button';
import {loginHandler} from '../../../utils/functions';
import {ChevronLeft, ChevronRight} from "react-feather";

import {useDispatch, useSelector} from "react-redux";
import {authActions} from "../../../store/authentication-slice";
import { userPlaylistsActions } from '../../../store/user-playlists-slice';

import classes from './TopBar.module.css';

const TopBar = () => {
    const dispatch = useDispatch();
    const accessToken = useSelector(state => state.auth.accessToken);

    const logoutHandler = () => {
        dispatch(authActions.logout());
        dispatch(userPlaylistsActions.restartUserPlaylists());
        dispatch(userPlaylistsActions.unselectPlaylist());
        dispatch(userPlaylistsActions.restartUserSavedTracks());
    }

    return <div className={classes["NavHeader"]}>
        <div className={classes["NavArrows"]}>
            <button
                type={'button'}
                className={classes["NavLeftArrow"]}
                aria-label={"Go Back"}
            >
                <ChevronLeft/>
            </button>
            <button
                type={'button'}
                className={classes["NavRightArrow"]}
                aria-label={"Go Forward"}
            >
                <ChevronRight/>
            </button>
        </div>
        <div className={classes["NavActions"]}>
            <Button
                aria-label={"Log in"}
                onClick={accessToken ? logoutHandler : loginHandler}
            >
                {accessToken ? 'Log out' : 'Log in'}
            </Button>
        </div>
    </div>

}

export default TopBar;