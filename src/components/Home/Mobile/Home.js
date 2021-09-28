import React from 'react';
import { useSelector } from 'react-redux';
import {Route} from "react-router-dom";

import Search from "../../Search/Search";
import PlaylistsRow from "../../PlaylistsRow/PlaylistsRow";
import Topbar from '../../Nav/Mobile/Topbar';
import Browse from '../../Browse/Browse';
import PremiumFooter from '../../Footer/PremiumFooter/PremiumFooter';
import PlaybarFooter from '../../Footer/PlaybarFooter/PlaybarFooter';

import classes from './Home.module.css';
import PlaylistDetails from "../../PlaylistDetails/PlaylistDetails";

const Home = () => {
    const accessToken = useSelector(state => state.auth.accessToken);
    const selectedPlaylistId = useSelector(state => state.userPlaylists.selectedPlaylistId);

    return (
        <div className={classes["RootContainer"]}>
            <div className={classes["TopBar"]}>
                <Topbar />
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

export default Home;