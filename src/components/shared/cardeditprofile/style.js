import styled from "styled-components";
import { TextField } from "@material-ui/core";

export const StyledTextField = styled(TextField)`
  width: 10rem !important;
  margin-bottom: 2rem !important;
`;

export const ContainerTech = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 20rem;
  height: ${({ opens }) => (opens ? "14rem" : "7rem")};
  box-shadow: 0px 4px 2px #c5c5c5;
  background-color: #f5f5f5;
  margin-bottom: 2rem;

  img {
    width: 25%;
  }
`;
export const CardIcons = styled.div`
  display: flex;
  width: 50%;
  height: 100%;

  color: white;
  border: 2px solid black;
  background-color: blue;
  text-align: center;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
`;
export const CardTitulo = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;

  width: 50%;
  height: 100%;
  padding-right: 2rem;

  text-align: center;
  h3 {
    width: 100%;
    margin: 0.5rem 0 0 1rem;
    text-overflow: ellipsis;
    overflow: hidden;
    font-weight: 500;
  }
  p {
    margin-left: 1rem;
  }
  button {
    margin-top: 3rem;
  }
`;
export const EditSelect = styled.div`
  margin-left: 1rem;
  width: 100%;

  button {
    width: 100% !important;
  }
`;

export const CardEdit = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
