import styled from "styled-components";

const Image = styled.img`
  color: #ffffff;
  font-size: 1em;
  height: auto;
  max-height: 150px;
  width: 100%;
  cursor: ${(props) => (props.onClick ? "pointer" : "default")};
`;

const StyledImage = (props) => <Image {...props} />;

export default StyledImage;
