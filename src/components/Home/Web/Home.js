import React from 'react';
import { useSelector } from 'react-redux';

import PremiumFooter from '../../Footer/PremiumFooter/PremiumFooter';
import PlaybarFooter from '../../Footer/PlaybarFooter/PlaybarFooter';
import Sidebar from '../../Nav/Web/Sidebar';
import TopBar from '../../Nav/Web/Topbar';
import Browse from '../../Browse/Browse';

import classes from './Home.module.css';

export default function Home() {

    const accessToken = useSelector(state => state.auth.accessToken);

    return (
        <div className={classes["RootContainer"]}>
            <div className={classes["SideBar"]}>
                <Sidebar />
            </div>
            <div className={classes["TopBar"]}>
                <TopBar />
            </div>
            <div className={classes["Browse"]}>
                <Browse />
            </div>
            <div className={classes["Footer"]}>
                {accessToken ? <PlaybarFooter /> : <PremiumFooter />}
            </div>
        </div>
    )
}
