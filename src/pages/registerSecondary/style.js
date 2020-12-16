import styled from "styled-components";
import {
  Fab,
  Select,
  AccordionSummary,
  AccordionDetails,
  Accordion,
} from "@material-ui/core";

export const SelectLevel = styled(Select)`
  width: 100%;
`;
export const StyledAccordion = styled(Accordion)`
  width: 100%;
  margin-bottom: 1rem;
`;
export const StyledAccordionSummary = styled(AccordionSummary)`
  width: 100%;
  display: flex;
  padding: 0 !important;
  margin: 0 !important;
  align-items: center;
  p {
    display: flex;
    align-items: center;
    padding-left: 1rem;
    width: calc(50% - 1rem);
  }
  div {
    width: 50%;

    text-align: right;
  }
`;
export const StyledAccordionDetails = styled(AccordionDetails)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ContainerForm = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 5rem 0 3rem 0;
  min-height: calc(100vh - 8rem);

  background-color: whitesmoke;

  @media (min-width: 640px) {
    padding: 4rem 0 3rem 0;
    min-height: calc(100vh - 7rem);
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
    width: 40%;
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
  top: 14rem;

  position: absolute;
  @media (min-width: 640px) {
    top: 7rem;
  }
  @media (min-width: 1080px) {
    top: 8rem;
  }
`;

export const ContainerDefault = styled.div`
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
