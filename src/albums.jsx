import "./album.css";
import Album from "./album";

import { useEffect, useState } from "react";

export default function Albums() {
  const [album, setAlbum] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/albums")
      .then((response) => response.json())
      .then((data) => setAlbum(data));
  }, []);
  return (
    <div className="albums">
      <h2>Album length : {album.length}</h2>
      {album.map((pass) => (
        <Album data={pass}></Album>
      ))}
    </div>
  );
}
