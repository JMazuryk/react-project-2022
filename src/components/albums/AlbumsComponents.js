import {useEffect, useState} from "react";

import {getAlbums} from "../../services";
import AlbumComponents from "./AlbumComponents";


export default function AlbumsComponents() {

    let [albums, setAlbums] = useState([]);

    useEffect(() => {
        getAlbums().then(value => setAlbums([...value]))
    }, []);

    return (
        <div>
            {
                albums.map(value => <AlbumComponents item={value} key={value.id}/>)
            }
        </div>
    );
}