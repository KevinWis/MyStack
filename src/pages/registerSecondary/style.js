import styled from "styled-components";
import { Fab } from "@material-ui/core";
import { Select } from "@material-ui/core";

export const SelectLevel = styled(Select)`
  width: 100%;
`;

export const ContainerForm = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 5rem 0 3rem 0;
  height: calc(100vh - 8rem);

  background-color: whitesmoke;

  @media (min-width: 640px) {
    padding: 4rem 0 3rem 0;
    height: calc(100vh - 7rem);
  }
`;

export const Form = styled.form`
  width: 80%;
  height: 100%;

  text-align: center;

  display: flex;

  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 2rem 0;

  text-align: left;

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

export const ContainerPersonIcon = styled.div`
  text-align: center;
  width: 100%;
  margin: 0 auto;

  display: flex;
  align-items: center;
  flex-direction: column;

  position: relative;
`;

export const ContainerPersonPhoto = styled.div`
  text-align: center;
  width: 100%;
  margin: 0 auto;
`;

export const ContainerIcon = styled.div`
  text-align: center;
  width: 100%;
  height: 100%;
  top: 12rem;
  left: 6rem;
  position: absolute;
  @media (min-width: 640px) {
    top: 6rem;
    left: 4rem;
  }
  @media (min-width: 1080px) {
    top: 6rem;
    left: 4rem;
  }
`;

export const ContainerTechs = styled.div`
  width: 100%;
`;

export const ContainerTitle = styled.div`
  width: 100%;
  margin-bottom: 1rem;
`;

export const ContainerStatus = styled.div`
  width: 100%;
  margin-bottom: 1rem;
`;

export const ContainerBio = styled.div`
  text-align: center;
  width: 100%;
  margin-bottom: 1rem;
`;

export const ContainerButton = styled.div`
  text-align: center;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const FabComponent = styled(Fab)`
  background-color: #e5e5e5; ;
`;
