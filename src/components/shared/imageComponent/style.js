import styled from "styled-components";

export const StyledComponentImg = styled.img`
  width:${props => props.width ? props.width : 'auto'};
  height:${props => props.width ? props.width : 'auto'};
`;
