import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    playlistsData: [],
    selectedPlaylistId: null,
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
        },
        selectPlaylist(state,action) {
            state.selectedPlaylistId = action.payload.playlistId;
        },
        unselectPlaylist(state) {
            state.selectedPlaylistId = null;
        }
    },
});

export const userPlaylistsActions = userPlaylistsSlice.actions;

export default userPlaylistsSlice.reducer;