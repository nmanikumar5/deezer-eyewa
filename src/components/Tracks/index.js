// @ts-nocheck
import React from "react";
import { useSelector } from "react-redux";
import isEmpty from "lodash/isEmpty";
import { fmtMSS } from "../../helpers/utils";
import { COLOR_CODES } from "../../constants";
import { Paragraph, Row, Table, Col, StyledImage } from "../common";

const styles = {
  imageCol: {
    textAlign: "center",
    position: "relative",
    margin: "-50px 0",
    paddingTop: "10%",
  },
  image: { width: "150px" },
  tableSec: { backgroundColor: COLOR_CODES.darkGray },
};

const Tracks = () => {
  const selectedAlbum = useSelector((state) =>
    state.deezer.selectedAlbum ? state.deezer.selectedAlbum : ""
  );
  const trackList = useSelector((state) =>
    state.deezer.trackList ? state.deezer.trackList : []
  );

  const tdHeads = {
    "#": {
      align: "center",
      field: "",
      width: "80px",
    },
    Title: { align: "left", field: "title", width: "180px" },
    Artist: { align: "left", field: "artist.name" },
    Time: {
      align: "left",
      field: "duration",
      width: "100px",
      format: (seconds) => fmtMSS(seconds),
    },
    Relased: { align: "center", field: "rank" },
  };

  return (
    <>
      {!isEmpty(trackList) && (
        <>
          <Row>
            <Col size={3} style={styles.imageCol}>
              <StyledImage style={styles.image} src={selectedAlbum.cover_big} />
            </Col>
            <Col size={9}>
              <Paragraph fontSize={18} color={COLOR_CODES.cyan}>
                {selectedAlbum.title}
              </Paragraph>
            </Col>
          </Row>
          <Row style={styles.tableSec}>
            <Col size={2} />
            <Col size={9}>
              <Table tdHeads={tdHeads} data={trackList} />
            </Col>
          </Row>
        </>
      )}
    </>
  );
};

export default Tracks;
