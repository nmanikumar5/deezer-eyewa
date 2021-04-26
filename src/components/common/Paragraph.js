// @ts-nocheck
import styled from "styled-components";

export const Paragraph = styled.p`
  color: ${(props) => (props.color ? props.color : "#ffffff")};
  font-size: ${(props) => (props.fontSize ? `${props.fontSize}px` : "14px")};
  text-align: ${(props) => (props.align ? props.align : "left")};
`;

export default Paragraph;
