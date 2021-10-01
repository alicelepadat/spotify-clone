/*eslint-disable*/
import React, {useEffect, useState} from 'react';
import BASE_URL from '../../utils/api-url';
import {useSelector} from "react-redux";
import classes from "./FeaturedPlaylists.module.css";
import PlaylistsRow from "../PlaylistsRow/PlaylistsRow";

const FeaturedPlaylists = () => {
    const tokenType = useSelector(state => state.auth.tokenType);
    const token = useSelector(state => state.auth.accessToken);

    const [featuredTitle, setFeaturedTitle] = useState('');
    const [featuredPlaylists, setFeaturedPlaylists] = useState([]);

    useEffect(() => {
        const fetchFeaturedPlaylists = async () => {
            const response = await fetch(BASE_URL + '/browse/featured-playlists?country=RO&limit=5', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': tokenType + ' ' + token,
                },
            });
            return await response.json()
        }
        if (token) {
            fetchFeaturedPlaylists().then(res => {
                const playlists = [];
                setFeaturedTitle(res.message);
                if (res.playlists) {
                    res.playlists.items.map(item => playlists.push(
                        item
                    ));
                    setFeaturedPlaylists(playlists);
                }
            });
        }
    }, [token]);


    return <div className={classes["FeaturedPlaylistsContainer"]}>
        {
            featuredPlaylists &&
            <div className={classes["BrowseMainSection"]}>
                <PlaylistsRow
                    className={classes["PlaylistRow"]}
                    categoryTitle={featuredTitle}
                    showDescription={true}
                    playlists={featuredPlaylists}
                />
            </div>
        }
    </div>
};

export default FeaturedPlaylists;