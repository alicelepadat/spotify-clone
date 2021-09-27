import React, {useEffect, useState} from 'react';
import {useLocation} from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import {authActions} from "../../store/authentication-slice";

import HomeWeb from './Web/Home';
import HomeMobile from './Mobile/Home';

import {getToken} from '../../utils/functions';

export default function Container() {

    const dispatch = useDispatch();
    const location = useLocation()
    const authorization = getToken(location.hash);

    const [userData, setUserData] = useState({});

    useEffect(() => {
        if (!localStorage.getItem('access-token')) {
            dispatch(authActions.authenticate({
                accessToken: authorization['#access_token'],
                expirationTime: +authorization['expires_in'],
                tokenType: authorization['token_type'],
            }));
        }
    }, []);

    useEffect(() => {
        window.location.hash = 'menu';
    })

    const tokenType = useSelector(state => state.auth.tokenType);
    const token = useSelector(state => state.auth.accessToken);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('https://api.spotify.com/v1/me', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': tokenType + ' ' + token,
                }
            });
            return await response.json();
        };
        if (token) {
            fetchData().then(res => setUserData(res));
        }
    }, [token, tokenType]);

    console.log(userData)

    let mql = window.matchMedia("all and (min-width: 1024px)")
    const Home = mql.matches ? <HomeWeb/> : <HomeMobile/>

    return <React.Fragment>
        {Home}
    </React.Fragment>;
}
