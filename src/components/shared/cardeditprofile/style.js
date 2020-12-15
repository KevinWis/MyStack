import styled from "styled-components";
import { TextField } from "@material-ui/core";

export const StyledTextField = styled(TextField)`
  width: 10rem !important;
  margin-bottom:2rem !important;
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
  width: 50px;
  height: 50px;
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
  width: 50px;
  height: 50px;
  padding-right: 2rem;
  left: -20px;
  top: 15px;
  position: relative;
  text-align: left;
  h2 {
    margin: 0.2rem 0 0 0;
  }
  button{
    margin-top:3rem;
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

