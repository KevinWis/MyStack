import styled from "styled-components";
import { TextField } from "@material-ui/core";

export const StyledTextField = styled(TextField)`
  width: 10rem !important;
  margin-bottom: 2rem !important;
`;

export const ContainerTech = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 25rem;
  height: ${({ opens }) => (opens ? "18rem" : "9rem")};
  box-shadow: 0px 4px 2px #c5c5c5;
  background-color: #f5f5f5;
  margin-bottom: 2rem;
`;
export const CardIcons = styled.div`
  width: 50%;
  height: 100%;
  position: relative;
  left: -20px;
  top: 1.8rem;
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
  align-items: flex-start;
  flex-direction: column;
  justify-content: space-around;

  width: 50%;
  height: 100%;
  padding-right: 2rem;

  text-align: left;
  h3 {
    width: 100%;
    margin: 0.2rem 0 0 0;
    text-overflow: ellipsis;
    overflow: hidden;
  }
  button {
    margin-top: 3rem;
  }
`;

export const CardEdit = styled.div`
  height: 7rem;
  position: relative;
  left: 15px;
  top: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  right: 3rem;
`;
