import styled from "styled-components";
import { TextField, Select } from "@material-ui/core";
import Pagination from "@material-ui/lab/Pagination";

export const MemberList = styled.div`
  width: 80%;
  margin: auto;
  margin-top: 6rem;
  overflow: hidden !important;
  display: flex;
  flex-flow: row wrap;
`;

export const StyledTextField = styled(TextField)`
  width: 12rem;
  @media (min-width: 640px) {
    width: 15rem;
  }
  @media (min-width: 1080px) {
    width: 20rem;
  }
`;

export const StyledPagination = styled(Pagination)`
  margin: 5rem 0 1rem 0;
`;

export const StyledSelect = styled(Select)`
  width: 12rem;
  @media (min-width: 640px) {
    width: 15rem;
  }
  @media (min-width: 1080px) {
    width: 20rem;
  }
`;

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  padding: 5rem 0 3rem 0;
  min-height: calc(100vh - 8rem);

  margin: 0 auto;
  max-width: 1280px;

  @media (min-width: 640px) {
    padding: 4rem 0 3rem 0;
    min-height: calc(100vh - 7rem);
  }
`;

export const FormContainer = styled.div`
  margin-top: 2rem;
  width: 80%;
  display: flex;
  align-items: flex-end;
  justify-content: space-around;

  @media (min-width: 640px) {
    width: 70%;
  }
`;
