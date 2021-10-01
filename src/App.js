import React, {useEffect} from 'react';
import {useDispatch} from "react-redux"
import {authActions} from "./store/authentication-slice";
import {userPlaylistsActions} from './store/user-playlists-slice';

import HomeContainer from './components/Home/Container';

import './App.css';
import {Redirect, Route} from "react-router-dom";

function App() {

    const dispatch = useDispatch();

    const logoutHandler = () => {
        dispatch(authActions.logout());
        dispatch(userPlaylistsActions.restartUserPlaylists());
        dispatch(userPlaylistsActions.unselectPlaylist());
        dispatch(userPlaylistsActions.restartUserSavedTracks());
    };

    useEffect(() => {
        const token = localStorage.getItem('access-token');
        console.log(token)
        if (!token) {
            logoutHandler();
        } else {
            const expirationDate = new Date(localStorage.getItem('expiration-date'));
            if (expirationDate <= new Date()) {
                logoutHandler();
            } else {
                const tokenType = localStorage.getItem('token-type');
                dispatch(authActions.authenticate({
                    accessToken: token,
                    tokenType: tokenType,
                    expirationTime: (expirationDate.getTime() - new Date().getTime()) / 1000,
                }))
                setTimeout(() => {
                    logoutHandler();
                }, expirationDate.getTime() - new Date().getTime());
            }
        }
    });

    return (
        <div className="App">
            <Route exact path="/">
                <Redirect to="/menu" />
            </Route>
            <HomeContainer/>
        </div>
    );
}

export default App;
