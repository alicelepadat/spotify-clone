import {Clock, Play} from "react-feather";

import classes from './PlaylistItems.module.css';

const PlaylistItems = ({items}) => {
    const getMinutes = (ms) => {
        const minutes = Math.trunc((ms / 1000) / 60);
        const seconds = Math.trunc(((ms / 1000) % 60));
        return `${minutes}:${seconds}`;
    }
    return <div className={classes["PlaylistItems"]}>
        <table className={classes["PlaylistItemsTable"]}>
            <thead>
            <tr className={classes["TableHead"]}>
                <th className={classes["SongNumber"]}>#</th>
                <th className={classes["SongTitleHead"]}>TITLE</th>
                <th className={classes["SongAlbum"]}>ALBUM</th>
                <th className={classes["SongAdded"]}>DATE ADDED</th>
                <th className={classes["SongDuration"]}><Clock/></th>
            </tr>
            </thead>
            <tbody>
            {items.map((item, i) => (
                item.track &&
                <tr key={i} className={classes["SongRow"]}>
                    <td className={classes["SongNumber"]}>
                        <span>{i + 1}</span>
                        <button type={'button'} aria-label={'Play song'} className={classes["PlaySongBtn"]}>
                            <Play/>
                        </button>
                    </td>
                    <td className={classes["SongTitle"]}>
                        <img alt={item.track.name}
                             src={item.track.album.images[2].url}
                             width={40}
                             height={40}
                        />
                        <p>{item.track.name}</p>
                    </td>
                    <td className={classes["SongAlbum"]}>{item.track.album.name}</td>
                    <td className={classes["SongAdded"]}>{new Date(item["added_at"]).toLocaleDateString("en", {
                        year: "numeric",
                        month: 'short',
                        day: 'numeric'
                    })}</td>
                    <td className={classes["SongDuration"]}>{getMinutes(item.track["duration_ms"])}</td>
                </tr>
            ))}
            </tbody>
        </table>
    </div>
}

export default PlaylistItems;