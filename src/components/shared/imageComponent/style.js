import styled from "styled-components";

export const StyledComponentImg = styled.img`
  width: ${(props) => (props.width ? props.width : "auto")};
  @media (min-width: 640px) {
    width: ${(props) => (props.smallWidth ? props.smallWidth : "auto")};
  }
`;
