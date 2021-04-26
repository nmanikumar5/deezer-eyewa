// @ts-nocheck
import React, { useEffect, useState } from "react";
import { Col, Row, Button, SearchInput } from "../common";
import { EYEWA_CONST } from "../../constants";

const Search = ({ artistName, getArtists, artistList, getAlbums }) => {
  const [options, setOptions] = useState([]);

  useEffect(() => {
    setOptions(artistList);
  }, [artistList]);

  useEffect(() => {
    if (artistName === "") {
      setOptions([]);
    }
  }, [artistName]);

  const onClick = (selectedArtist) => {
    setOptions([]);
    getAlbums(selectedArtist);
  };

  return (
    <>
      <Row>
        <Col size={8}>
          <SearchInput
            options={options}
            requests={getArtists}
            onClickFunction={onClick}
            placeholder="Search Here"
            titleField="name"
          />
        </Col>
        <Col size={2}>
          {/* Not mentioned any action for Search Button */}
          <Button>{EYEWA_CONST.SEARCH}</Button>
        </Col>
      </Row>
    </>
  );
};

export default Search;
