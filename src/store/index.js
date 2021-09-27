import {configureStore} from "@reduxjs/toolkit"
import authenticationReducer from "./authentication-slice";
import userPlaylistsReducer from "./user-playlists-slice";


const store = configureStore({
    reducer: {
        auth: authenticationReducer,
        userPlaylists: userPlaylistsReducer,
    },
});

export default store;