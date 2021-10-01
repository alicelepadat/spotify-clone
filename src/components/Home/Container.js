/* eslint-disable */

import React, {useEffect} from 'react';
import {useLocation} from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import {getToken} from '../../utils/functions';
import {userPlaylistsActions} from "../../store/user-playlists-slice";
import {authActions} from "../../store/authentication-slice";
import BASE_URL from '../../utils/api-url';

import HomeWeb from './Web/Home';
import HomeMobile from './Mobile/Home';


export default function Container() {

    const dispatch = useDispatch();
    const location = useLocation()
    const tokenType = useSelector(state => state.auth.tokenType);
    const token = useSelector(state => state.auth.accessToken);

    useEffect(() => {
        if (location.hash && !localStorage.getItem('access-token')) {
            const authorization = getToken(location.hash);
            dispatch(authActions.authenticate({
                accessToken: authorization['#access_token'],
                expirationTime: +authorization['expires_in'],
                tokenType: authorization['token_type'],
            }));
        }
    }, []);


    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`${BASE_URL}/me`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': tokenType + ' ' + token,
                }
            });
            return await response.json();
        };
        if (token) {
            fetchData().then(res => console.log(res));
        }
    }, [token, tokenType]);

    useEffect(() => {
        const fetchPlaylists = async () => {
            const response = await fetch(
                `${BASE_URL}/me/playlists`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': tokenType + ' ' + token,
                    },
                });
            return await response.json();
        };
        token && fetchPlaylists().then(res =>
            dispatch(userPlaylistsActions.getUserPlaylists({
                playlistsData: res.items
            })));
    }, [tokenType, token]);

    useEffect(() => {
        const fetchUserSavedTracks = async () => {
            const response = await fetch(`${BASE_URL}/me/tracks?market=RO`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': tokenType + ' ' + token,
                },
            });
            return await response.json();
        }
        token && fetchUserSavedTracks()
            .then(res =>
                dispatch(userPlaylistsActions.getUserSavedTracks({
                    tracks: res.items
                })));
    }, [token, tokenType]);

    let mql = window.matchMedia("all and (min-width: 1024px)")
    const Home = mql.matches ? <HomeWeb/> : <HomeMobile/>

    return <React.Fragment>
        {Home}
    </React.Fragment>;
}
