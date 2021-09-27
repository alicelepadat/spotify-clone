import React from 'react';
// import PlaylistsRow from '../../PlaylistsRow/PlaylistsRow';
import Footer from '../../Footer/PremiumFooter/PremiumFooter';

import Sidebar from '../../Nav/Web/Sidebar';
import TopBar from '../../Nav/Web/Topbar';
import Browse from '../../Browse/Browse';

import classes from './Home.module.css';

export default function Home({ userId }) {
    return (
        <div className={classes["RootContainer"]}>
            <div className={classes["SideBar"]}>
                <Sidebar />
            </div>
            <div className={classes["TopBar"]}>
                <TopBar />
            </div>
            <div className={classes["Browse"]}>
                <Browse userId={userId} />
            </div>
            <div className={classes["Footer"]}>
                <Footer />
            </div>
        </div>
    )
}
