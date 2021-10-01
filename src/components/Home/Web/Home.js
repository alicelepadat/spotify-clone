/* eslint-disable */

import React, {useEffect, useRef} from 'react';
import {Route} from "react-router-dom";
import {useDispatch, useSelector} from 'react-redux';
import {userPlaylistsActions} from "../../../store/user-playlists-slice";
import PremiumFooter from '../../Footer/PremiumFooter/PremiumFooter';
import PlaybarFooter from '../../Footer/PlaybarFooter/PlaybarFooter';
import Sidebar from '../../Nav/Web/Sidebar';
import TopBar from '../../Nav/Web/Topbar';
import Browse from '../../Browse/Browse';
import Search from "../../Search/Search";
import PlaylistsRow from "../../PlaylistsRow/PlaylistsRow"
import PlaylistDetails from "../../PlaylistDetails/PlaylistDetails";

import classes from './Home.module.css';
import useImageColor from "use-image-color";

export default function Home() {

    const dispatch = useDispatch();
    const topbarRef = useRef();
    const accessToken = useSelector(state => state.auth.accessToken);

    console.log(accessToken)

    useEffect(() => {
        const id = localStorage.getItem('selected-playlist-id');
        if (id) {
            dispatch(userPlaylistsActions.selectPlaylist({playlistId: id}));
        }
    }, []);

    const currentImg = localStorage.getItem('current-cover');
    const {colors} = useImageColor(currentImg, {cors: true, colors: 2});
    const playlistHover = useSelector(state => state.userPlaylists.playlistCoverHover);


    useEffect(() => {
        if (topbarRef.current && accessToken) {
            if (location.pathname === '/menu') {
                if (playlistHover && colors) {
                    topbarRef.current.style.backgroundColor = `${colors[0]}`;
                } else {
                    topbarRef.current.style.backgroundColor = 'rgb(124, 109, 232)';
                }
            }
        } else {
            topbarRef.current.style.backgroundColor = '#0f0e0e';
        }
        if (!accessToken) {
            topbarRef.current.style.backgroundColor = '#0f0e0e';
        }
    }, [playlistHover, colors, location.pathname,accessToken]);

    return (
        <div className={classes["RootContainer"]}>
            <div className={classes["SideBar"]}>
                <Sidebar/>
            </div>
            <div ref={topbarRef} className={classes["TopBar"]}>
                <TopBar/>
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
