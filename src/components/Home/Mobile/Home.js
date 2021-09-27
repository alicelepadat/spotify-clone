import React from 'react';
import { useSelector } from 'react-redux';

import Topbar from '../../Nav/Mobile/Topbar';
import Browse from '../../Browse/Browse';
import PremiumFooter from '../../Footer/PremiumFooter/PremiumFooter';
import PlaybarFooter from '../../Footer/PlaybarFooter/PlaybarFooter';

import classes from './Home.module.css';

const Home = () => {
    const accessToken = useSelector(state => state.auth.accessToken);

    return (
        <div className={classes["RootContainer"]}>
            <div className={classes["TopBar"]}>
                <Topbar />
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

export default Home;