import styled from "styled-components";
import { TextField } from "@material-ui/core";

export const ContainerForm = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 5rem 0 3rem 0;
  height: calc(100vh - 8rem);

  margin: 0 auto;
  max-width: 1280px;

  @media (min-width: 640px) {
    padding: 4rem 0 3rem 0;
    height: calc(100vh - 7rem);
  }
`;

export const ContainerContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 80%;
  width: 100%;
  text-align: center;

  flex: 1 1 0;
  img {
    width: 40%;
  }
  @media (min-width: 640px) {
    flex-direction: row;
    justify-content: space-around;
  }
`;

export const Form = styled.form`
  width: 60%;
  height: 60%;

  text-align: center;

  display: flex;

  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 2rem 0;

  margin: 0 auto;

  @media (min-width: 640px) {
    width: 50%;
  }
  @media (min-width: 1080px) {
    width: 30%;
  }
  label {
    color: #43c1d8 !important;
  }
  .MuiInput-underline:after {
    border-color: #43c1d8 !important;
  }
`;
export const StyledTextField = styled(TextField)`
  width: 80%;
`;

export const HDiv = styled.div`
  margin: 1rem;
`;

export const ButtonContainer = styled.div`
  margin: 3rem 0 1rem 0;
  width: 80%;
  button {
    width: 100%;
  }
  @media (min-width: 1080px) {
    margin: 1rem 0 1rem 0;
  }
`;
