import React from 'react';
import {Route} from "react-router-dom";
import { useSelector } from 'react-redux';

import PremiumFooter from '../../Footer/PremiumFooter/PremiumFooter';
import PlaybarFooter from '../../Footer/PlaybarFooter/PlaybarFooter';
import Sidebar from '../../Nav/Web/Sidebar';
import TopBar from '../../Nav/Web/Topbar';
import Browse from '../../Browse/Browse';
import Search from "../../Search/Search";
import PlaylistsRow from "../../PlaylistsRow/PlaylistsRow"
import PlaylistDetails from "../../PlaylistDetails/PlaylistDetails";

import classes from './Home.module.css';

export default function Home() {

    const accessToken = useSelector(state => state.auth.accessToken);
    const selectedPlaylistId = useSelector(state => state.userPlaylists.selectedPlaylistId);

    return (
        <div className={classes["RootContainer"]}>
            <div className={classes["SideBar"]}>
                <Sidebar />
            </div>
            <div className={classes["TopBar"]}>
                <TopBar />
            </div>
            <div className={classes["Browse"]}>
                <Route path={'/search'} component={Search}/>
                <Route path={'/menu'} component={Browse} />
                <Route path={'/playlists'} component={PlaylistsRow} />
                {selectedPlaylistId && <Route path={'/playlist'} component={PlaylistDetails}/>}
            </div>
            <div className={classes["Footer"]}>
                {accessToken ? <PlaybarFooter /> : <PremiumFooter />}
            </div>
        </div>
    )
}
