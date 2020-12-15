import styled from "styled-components";

export const StyledComponentImg = styled.img`
  width: ${(props) => (props.width ? props.width : "auto")};
  height: ${(props) => props.height && props.height};
  border-radius: ${(props) => (props.round ? "100%" : "0")};
  @media (min-width: 640px) {
    width: ${(props) => (props.smallWidth ? props.smallWidth : "auto")};
    height: ${(props) => props.smallHeight && props.smallHeight};
  }
`;
