// @ts-nocheck
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTracks } from "../../actions";
import { Row, Col, Paragraph } from "../common";
import Album from "./Album";
import isEmpty from "lodash/isEmpty";
import { COLOR_CODES, EYEWA_CONST } from "../../constants";

const ShowAlbums = () => {
  // Added useSelector to know that we can use like this instead of passing from the parent
  const artistName = useSelector((state) =>
    state.deezer.selectedArtist ? state.deezer.selectedArtist.name : ""
  );
  const albumList = useSelector((state) =>
    state.deezer.albumList ? state.deezer.albumList : []
  );

  const selectedAlbum = useSelector((state) =>
    state.deezer.selectedAlbum ? state.deezer.selectedAlbum : []
  );
  const dispatch = useDispatch();
  return (
    <>
      {artistName && (
        <Paragraph fontSize={18}>Search Results for "{artistName}"</Paragraph>
      )}
      {!isEmpty(albumList) && (
        <>
          <hr />
          <Paragraph fontSize={20} color={COLOR_CODES.cyan}>
            {EYEWA_CONST.ALBUMS}
          </Paragraph>
          <Row key="show-albums-row">
            {albumList.slice(0, 5).map((eachAlbum) => (
              <Col key={`${eachAlbum.id}-col`} size={2}>
                <Album
                  key={eachAlbum.id}
                  data={eachAlbum}
                  handleClick={(eachAlbumData) => {
                    dispatch(getTracks(eachAlbumData));
                  }}
                />
                {selectedAlbum.id === eachAlbum.id && <hr />}
              </Col>
            ))}
          </Row>
        </>
      )}
    </>
  );
};

export default ShowAlbums;
