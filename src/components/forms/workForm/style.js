import { AccordionDetails, AccordionSummary } from "@material-ui/core";
import styled from "styled-components";

export const StyledAccordionDetails = styled(AccordionDetails)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;
export const FormGroup = styled(AccordionDetails)`
  display: flex;
  flex-direction: column;
  margin: 1rem 0;
`;
export const StyledAccordionSummary = styled(AccordionSummary)`
  margin: 3rem 0;
  padding: 2rem;

  box-shadow: 0px 4px 2px #c5c5c5;
  background-color: #f5f5f5;
`;
