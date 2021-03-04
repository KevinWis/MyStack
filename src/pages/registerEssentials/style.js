import styled from "styled-components";
import { TextField } from "@material-ui/core";

export const ContainerContentPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  padding: 5rem 0 3rem 0;
  height: calc(100vh - 8rem);

  margin: 0 auto;
  max-width: 1080px;

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
  @media (min-width: 640px) {
    flex-direction: row;
    justify-content: space-around;
  }
`;

export const ContainerImage = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 5rem;
  margin-bottom: 5rem;
  justify-content: center;
  align-items: center;
`;
export const CardImage = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  text-align: center;
`;

export const HDiv = styled.div`
  margin: 1rem;
`;
export const StyledTextField = styled(TextField)`
  width: 80%;
`;

export const Form = styled.form`
  width: 100%;
  height: 60%;

  text-align: center;

  display: flex;

  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 2rem 0;

  @media (min-width: 640px) {
    width: 50%;
  }
  @media (min-width: 1080px) {
    width: 25%;
  }
  label {
    color: #43c1d8 !important;
  }
  .MuiInput-underline:after {
    border-color: #43c1d8 !important;
  }
`;

export const ButtonContainer = styled.div`
  margin: 3rem 0 1rem 0;
  width: 80%;
  button {
    width: 100%;
  }
`;
