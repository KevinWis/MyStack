import styled from "styled-components";

// Card, ContainerCardTitle, ContainerCardContent, ContainerButton,

export const Card = styled.div`
  width: 24rem;
  height: 28rem;
  background-color: #f5f5f5;
  margin: 0 auto;
  text-align: center;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
  margin-bottom: 4vh;
`;
export const ContainerCardTitle = styled.div`
  height: 23.5%;
  padding-top: 2%;
  /* background-color: aqua; */
`;
export const ContainerCardContent = styled.div`
  padding-top: 5%;
  height: 50%;
  /* background-color: chocolate; */
`;
export const ContainerButton = styled.div`
  height: 20%;
  /* background-color: black;     */
  button {
    width: 99%;
    height: 100%;
    box-shadow: 0 !important;
  }
`;
