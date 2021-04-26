import styled from "styled-components";

export const Col = styled.div`
  flex-grow: 1;
  flex-shrink: 0;
  flex-basis: ${(
    props // @ts-ignore
  ) => (props.size ? `${100 * (props.size / 12)}%` : "100%")};
  max-width: ${(
    props // @ts-ignore
  ) => (props.size ? `${100 * (props.size / 12)}%` : "100%")};
  box-sizing: border-box;
  margin: auto;
`;

export default Col;
