// @ts-ignore
import React from "react";
import Search from "../components/Search";
import ShowAlbums from "../components/ShowAlbums";
import Tracks from "../components/Tracks";
import { Row } from "./common";

const App = ({
  artistName,
  getArtists,
  artistList,
  getAlbums,
  selectedArtist,
  selectedAlbum,
}) => {
  return (
    <>
      <Row>
        <Search
          artistList={artistList}
          artistName={artistName}
          getArtists={getArtists}
          getAlbums={getAlbums}
        />
      </Row>
      {selectedArtist != null && <ShowAlbums />}
      {selectedAlbum != null && <Tracks />}
    </>
  );
};

export default App;
