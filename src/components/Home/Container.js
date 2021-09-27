import React, {useState} from 'react';
import { useLocation } from 'react-router';

import HomeWeb from './Web/Home';
import HomeMobile from './Mobile/Home';

import { getToken } from '../../utils/functions';

export default function Container() {

    const [userId, setUserId] = useState(null);

    let mql = window.matchMedia("all and (min-width: 1024px)")
    const Home = mql.matches ? <HomeWeb userId={userId} /> : <HomeMobile userId={userId} />

    const location = useLocation();
    console.log(getToken(location.hash))

    return <React.Fragment>
        {Home}
    </React.Fragment>;
}
