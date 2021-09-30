/* eslint-disable */

import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Route} from "react-router-dom";
import {userPlaylistsActions} from "../../../store/user-playlists-slice";

import Search from "../../Search/Search";
import PlaylistsRow from "../../PlaylistsRow/PlaylistsRow";
import Topbar from '../../Nav/Mobile/Topbar';
import Browse from '../../Browse/Browse';
import PremiumFooter from '../../Footer/PremiumFooter/PremiumFooter';
import PlaybarFooter from '../../Footer/PlaybarFooter/PlaybarFooter';
import PlaylistDetails from "../../PlaylistDetails/PlaylistDetails";

import classes from './Home.module.css';

const Home = () => {
    const dispatch = useDispatch();

    const accessToken = useSelector(state => state.auth.accessToken);

    useEffect(() => {
        const id = localStorage.getItem('selected-playlist-id');
        if (id) {
            dispatch(userPlaylistsActions.selectPlaylist({playlistId: id}));
        }
    }, []);

    return (
        <div className={classes["RootContainer"]}>
            <div className={classes["TopBar"]}>
                <Topbar/>
            </div>
            <div className={classes["Browse"]}>
                {accessToken && <Route path={'/search'} component={Search}/>}
                <Route path={'/menu'} component={Browse}/>
                {accessToken && <Route path={'/playlists'} component={PlaylistsRow}/>}
                {accessToken && <Route path={'/playlist'} component={PlaylistDetails}/>}
            </div>
            <div className={classes["Footer"]}>
                {accessToken ? <PlaybarFooter/> : <PremiumFooter/>}
            </div>
        </div>
    )
}

export default Home;