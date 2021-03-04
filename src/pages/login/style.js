import styled from "styled-components";
import { TextField } from "@material-ui/core";

export const Form = styled.form`
  width: 100%;
  text-align: center;

  display: flex;

  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 2rem 0;

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

export const ButtonContainer = styled.div`
  margin: 0.5rem 0;
  width: 80%;
  button {
    width: 100%;
  }
  @media (min-width: 1080px) {
    margin: 1rem 0;
  }
`;
