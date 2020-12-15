import styled from "styled-components";

// Card, ContainerCardTitle, ContainerCardContent, ContainerButton,

export const Card = styled.div`
  width: 24rem;
  height: 28rem;
  background-color: #f5f5f5;
  margin: 0 auto;
  text-align: center;
  box-shadow: 2px 6px 12px rgba(0, 0, 0, 0.3);
  margin-bottom: 4vh;
  background-color:whitesmoke;
`;

export const ContainerCardTitle = styled.div`
  height: 23.5%;
  padding-top: 2%;
`;

export const ContainerCardContent = styled.div`
  padding-top: 5%;
  height: 50%;
  width:80%;
  margin:auto;
`;

export const ContainerButton = styled.div`
  height: 20%;
  button {
    width: 99%;
    height: 100%;
    box-shadow: 0 !important;
  }
`;
