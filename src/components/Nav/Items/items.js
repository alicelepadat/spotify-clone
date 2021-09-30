import {Bookmark, Heart, Home, Search} from 'react-feather';

export const mobileItems  = [
    {
        name: "Premium",
        link: 'https://www.spotify.com/ro-en/premium/',
    },
    {
        name: "Help",
        link: 'https://support.spotify.com/ro-en/',
    },
    {
        name: "Download",
        link: 'https://www.spotify.com/ro-en/download/windows/?referrer=mwp',
    },
    {
        name: "Privacy",
        link: 'https://www.spotify.com/ro-en/legal/privacy-policy/',
    },
    {
        name: "Terms",
        link: 'https://www.spotify.com/ro-en/legal/end-user-agreement/',
    },
]

export const webItems = [
    {
        name: 'Home',
        icon: <Home/>,
        pathname: '/menu',
    },
    {
        name: 'Search',
        icon: <Search/>,
        pathname: '/search',
    },
    {
        name: 'Your library',
        icon: <Bookmark/>,
        pathname: '/playlists',
        state: {
            className: 'ExpandedPlaylistRow',
            showBtn: false,
        }
    },
    {
        name: 'Liked Songs',
        icon: <Heart/>,
        pathname: '/playlist',
        state: true,
    },
]