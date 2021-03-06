import styled from "styled-components";

// Card, ContainerCardTitle, ContainerCardContent, ContainerButton,

export const Card = styled.div`
  width: 24rem;
  height: 28rem;
  background-color: #f5f5f5;
  margin: 0 auto;
  text-align: center;
  box-shadow: 2px 2px 2px #c5c5c5;
  margin-bottom: 4vh;
`;

export const ContainerCardTitle = styled.div`
  height: 20%;
  padding: 5% 0;
  margin: 0.5rem;
  font-weight: 500;
  font-size: 0.9rem;
  word-break: break-word;
  text-overflow: ellipsis;
  overflow: auto;

  h1 {
    margin: 0;
  }
`;

export const ContainerCardContent = styled.div`
  padding: 5% 0;
  height: 40%;
  width: 80%;
  margin: auto;
  word-break: break-word;
  text-overflow: ellipsis;
  overflow: auto;
`;

export const ContainerButton = styled.div`
  height: 20%;
  button {
    width: 100%;
    height: 100%;
    box-shadow: 0 !important;
  }
`;

export const DemoLink = styled.a`
  text-decoration: none;
`;
