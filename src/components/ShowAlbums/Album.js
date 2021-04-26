// @ts-nocheck
import React from "react";
import { Row, Paragraph, StyledImage } from "../common";
import { COLOR_CODES } from "../../constants";

const Album = ({ data, handleClick }) => (
  <Row>
    <StyledImage
      alt={data.title}
      src={data.cover_medium}
      onClick={() => handleClick(data)}
    />
    <Paragraph align="center" color={COLOR_CODES.cyan}>
      {data.title}
    </Paragraph>
  </Row>
);

export default Album;
