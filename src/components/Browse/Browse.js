import React from 'react';
import Card from '../UI/Card/Card';

import Row from '../UI/Row/Row';

import classes from './Browse.module.css';

export default function Browse() {
    return (
        <div className={classes["PlaylistsContainer"]}>
            <Row title={"Salut Romania!"}/>

            <div className={classes["PlaylistList"]}>
                <Card cover={"https://lite-images-i.scdn.co/image/ab67706f0000000290636a2178bcabda879b93e4"} title="Playlist1" description="Descriptionsjhdkajsk sdskjdksdjsbdnskdddddddddd gggggggggggggggggggggggggggggggg" />
                <Card title="Playlist1" description="Description" />
                <Card title="Playlist1" description="Description" />
                <Card title="Playlist1" description="Description" />
            </div>
        </div>
    )
}
