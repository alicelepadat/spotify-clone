import React, { useState } from "react";
import {useSelector} from "react-redux";
import {useDispatch} from "react-redux";
import {authActions} from "../../../store/authentication-slice";
import {userPlaylistsActions} from '../../../store/user-playlists-slice';
import Button from "../../UI/Button/Button";
import NavItems from "../Items/NavItems";
import { mobileItems } from "../Items/items";
import {loginHandler} from '../../../utils/functions';

import spotifyIcon from '../../../images/Spotify_Icon_RGB_Green.webp';
import { Search, Menu, X } from "react-feather";

import classes from './Topbar.module.css';

const Topbar = () => {
    const [navMobileIsExpanded, setNavMobileIsExpanded] = useState(false);

    const handleNavExpand = () => {
        setNavMobileIsExpanded(!navMobileIsExpanded);
    }

    const dispatch = useDispatch();
    const accessToken = useSelector(state => state.auth.accessToken);

    const logoutHandler = () => {
        dispatch(authActions.logout());
        dispatch(userPlaylistsActions.restartUserPlaylists());
    }

    return <header>
        <nav className={classes["NavToolbar"]}>
            <div className={classes["NavHeader"]}>
                {
                    !navMobileIsExpanded &&
                    <div className={classes["NavLogo"]}>
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