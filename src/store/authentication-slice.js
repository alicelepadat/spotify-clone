import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    accessToken: null,
    tokenType: null,
    expirationTime: null,
};

const authenticationSlice = createSlice({
    name: 'authentication',
    initialState,
    reducers: {
        authenticate(state, action) {
            state.accessToken = action.payload.accessToken;
            state.expirationTime = action.payload.expirationTime;
            state.tokenType = action.payload.tokenType;

            const expirationDate = new Date(new Date().getTime() + state.expirationTime * 1000);

            localStorage.setItem('access-token', state.accessToken);
            localStorage.setItem('token-type', state.tokenType);
            localStorage.setItem('expiration-date', expirationDate.toString());
        },
        logout(state) {
            localStorage.removeItem('access-token');
            localStorage.removeItem('token-type');
            localStorage.removeItem('expiration-date');

            state.accessToken = null;
            state.tokenType = null;
            state.expirationTime = null;
        },
    }
});

export const authActions = authenticationSlice.actions;

export default authenticationSlice.reducer;