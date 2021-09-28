import React, { useState } from "react";
import {useSelector} from "react-redux";
import {useDispatch} from "react-redux";
import {useHistory} from "react-router-dom";
import {loginHandler} from '../../../utils/functions';
import { mobileItems } from "../Items/items";
import {authActions} from "../../../store/authentication-slice";
import {userPlaylistsActions} from '../../../store/user-playlists-slice';
import spotifyIcon from '../../../images/Spotify_Icon_RGB_Green.webp';
import { Search, Menu, X } from "react-feather";

import Button from "../../UI/Button/Button";
import NavItems from "../Items/NavItems";


import classes from './Topbar.module.css';

const Topbar = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const accessToken = useSelector(state => state.auth.accessToken);
    const [navMobileIsExpanded, setNavMobileIsExpanded] = useState(false);

    const handleNavExpand = () => {
        setNavMobileIsExpanded(!navMobileIsExpanded);
    }

    const logoutHandler = () => {
        dispatch(authActions.logout());
        dispatch(userPlaylistsActions.restartUserPlaylists());
        dispatch(userPlaylistsActions.unselectPlaylist());
    }

    const goHomeHandler = () => {
        history.push({
            pathname: '/menu',
            state: undefined,
        });
        dispatch(userPlaylistsActions.unselectPlaylist());
    }

    return <header>
        <nav className={classes["NavToolbar"]}>
            <div className={classes["NavHeader"]}>
                {
                    !navMobileIsExpanded &&
                    <div className={classes["NavLogo"]} onClick={goHomeHandler}>
                        <img
                            alt={"Spotify Logo"}
                            src={spotifyIcon}
                            width={30}
                            height={30}
                        />
                    </div>
                }
                <div className={classes["NavActions"]}>
                    {
                        !navMobileIsExpanded &&
                        <button
                            className={classes["NavSearch"]}
                            type="button"
                            aria-label={"Search on Spotify"}
                        >
                            <Search size={15} />
                        </button>
                    }

                    {
                        !navMobileIsExpanded &&
                        <Button
                            aria-label={"Open App"}
                            onClick={accessToken ? logoutHandler : loginHandler}
                        >
                            {accessToken ? 'Log out' : 'Log in'}
                        </Button>
                    }
                    <button
                        className={`${classes["NavToggle"]} ${navMobileIsExpanded ? classes["NavClose"] : ''}`}
                        type="button"
                        aria-label={"NavMobile Toggle"}
                        onClick={handleNavExpand}
                    >
                        {!navMobileIsExpanded ? <Menu /> : <X />}
                    </button>
                </div>
            </div>
            {
                navMobileIsExpanded &&
                <div className={classes["NavItems"]}>
                    <NavItems items={mobileItems} className={classes["NavItem"]} />
                </div>
            }
        </nav>
    </header>
}

export default Topbar;