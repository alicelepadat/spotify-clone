const {
    REACT_APP_SPOTIFY_CLIENT_ID,
    REACT_APP_SPOTIFY_AUTHORIZE_URL,
    REACT_APP_SPOTIFY_SCOPES,
    REACT_APP_SPOTIFY_REDIRECT_URL,
} = process.env;

export const loginHandler = () => {
    window.location = `${REACT_APP_SPOTIFY_AUTHORIZE_URL}?client_id=${REACT_APP_SPOTIFY_CLIENT_ID}&scope=${encodeURIComponent(REACT_APP_SPOTIFY_SCOPES)}&redirect_uri=${REACT_APP_SPOTIFY_REDIRECT_URL}&response_type=token&show_dialog=true`;
};

export const getToken = (url) => {
    return url
        .split('&')
        .reduce((prev, curr) => {
            const [title, value] = curr.split('=');
            prev[title] = value;
            return prev;
        }, {});
}