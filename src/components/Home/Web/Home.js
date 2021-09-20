import React from 'react';
import Browse from '../../Browse/Browse';
import Footer from '../../Footer/Footer';

import Sidebar from '../../Nav/Web/Sidebar';
import TopBar from '../../Nav/Web/Topbar';

import classes from './Home.module.css';

export default function Home() {
    return (
        <div className={classes["RootContainer"]}>
            <div className={classes["SideBar"]}>
                <Sidebar />
            </div>
            <div className={classes["TopBar"]}>
                <TopBar />
            </div>
            <div className={classes["Browse"]}>
                <Browse/>
            </div>
            <div className={classes["Footer"]}>
                <Footer />
            </div>
        </div>
    )
}
