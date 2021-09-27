import React from 'react';

import Topbar from '../../Nav/Mobile/Topbar';
import Browse from '../../Browse/Browse';
import PremiumFooter from '../../Footer/PremiumFooter/PremiumFooter';

import classes from './Home.module.css';

const Home = ({ userId }) => {

    return (
        <div className={classes["RootContainer"]}>
            <div className={classes["TopBar"]}>
                <Topbar />
            </div>
            <div className={classes["Browse"]}>
                <Browse userId={userId} />
            </div>
            <div className={classes["Footer"]}>
                <PremiumFooter />
            </div>
        </div>
    )
}

export default Home;