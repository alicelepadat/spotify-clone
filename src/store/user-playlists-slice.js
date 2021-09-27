import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    playlistsData: [],
}

const userPlaylistsSlice = createSlice({
    name: 'user-playlists',
    initialState,
    reducers: {
        getUserPlaylists(state, action) {
            state.playlistsData = action.payload.playlistsData;
        },
        restartUserPlaylists(state) {
            state.playlistsData  =[];
        }
    },
});

export const userPlaylistsActions = userPlaylistsSlice.actions;

export default userPlaylistsSlice.reducer;