import React, {useEffect, useState} from 'react';
import {useSelector} from "react-redux";
import BASE_URL from '../../utils/api-url';

import classes from './PlaylistDetails.module.css';

const PlaylistDetails = () => {

    const selectedPlaylistId = useSelector(state => state.userPlaylists.selectedPlaylistId);
    const tokenType = useSelector(state => state.auth.tokenType);
    const token = useSelector(state => state.auth.accessToken);

    const [playlistItems, setPlaylistItems] = useState([]);

    useEffect(() => {
        if (selectedPlaylistId)
            window.location.hash = selectedPlaylistId+'';
    }, [selectedPlaylistId])

    useEffect(()=>{
        const fetchPlaylistItems = async () => {
            const response = await fetch(`${BASE_URL}/playlists/${selectedPlaylistId}/tracks`,{
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': tokenType + ' ' + token,
                }
            });

            return await response.json();
        }
        selectedPlaylistId && fetchPlaylistItems().then(res=>setPlaylistItems(res.items));
    }, [])

    console.log(playlistItems)

    return <div className={classes["PlaylistItemsContainer"]}>

    </div>
};

export default PlaylistDetails;