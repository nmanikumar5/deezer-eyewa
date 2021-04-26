// @ts-nocheck
import styled from "styled-components";
import { COLOR_CODES } from "../../../constants";

export const Input = styled.input`
  width: 100%;
  height: 51px;
  padding: 10px;
  color: ${COLOR_CODES.lightGray};
  background: ${COLOR_CODES.darkGray};
  border: none;
`;

export const Ul = styled.ul`
  display: contents;
`;

export const Li = styled.ul`
  width: 100%;
  height: 30px;
  padding: ${(props) => (!props.disabled ? "10px 10px 10px 40px" : "10px")};
  background: ${COLOR_CODES.darkGray};
  display: block;
  border-bottom: 1px solid ${COLOR_CODES.border};
  color: ${COLOR_CODES.lightGray};
  &:hover {
    cursor: pointer;
    color: #000000;
    background-color: #00ffff;
  }
  font-size: 14px;
  pointer-events: ${(props) => (props.disabled ? "none" : "default")};
`;

export const SuggestContainer = styled.div`
  height: 240px;
  width: 675px;
  overflow: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  margin-top: 16px;
  position: absolute;
  z-index: 99;
`;
