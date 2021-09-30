import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    playlistsData: [],
    selectedPlaylistId: null,
    playlistCoverHover: false,
    userSavedTracks: [],
}

const userPlaylistsSlice = createSlice({
    name: 'user-playlists',
    initialState,
    reducers: {
        getUserPlaylists(state, action) {
            state.playlistsData = action.payload.playlistsData;
        },
        restartUserPlaylists(state) {
            state.playlistsData = [];
        },
        selectPlaylist(state, action) {
            state.selectedPlaylistId = action.payload.playlistId;
            localStorage.setItem('selected-playlist-id', state.selectedPlaylistId);
        },
        unselectPlaylist(state) {
            state.selectedPlaylistId = null;
            localStorage.removeItem('selected-playlist-id');
        },
        mouseHoverPlaylist(state) {
            state.playlistCoverHover = true;
        },
        mouseLeavePlaylist(state) {
            state.playlistCoverHover = false;
        },
        getUserSavedTracks(state, action) {
            state.userSavedTracks = action.payload.tracks;
        },
        restartUserSavedTracks(state) {
            state.userSavedTracks = [];
        }
    },
});

export const userPlaylistsActions = userPlaylistsSlice.actions;

export default userPlaylistsSlice.reducer;