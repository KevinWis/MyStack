import styled from "styled-components";
import { RadioGroup } from "@material-ui/core";

export const Container = styled.div`
  margin-top: 20rem;
  margin-bottom: 10rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ContainerCard = styled.div`
  margin-top: 8rem;
`;

export const StyledRadioGroup = styled(RadioGroup)`
  margin: 3rem 0;
  padding: 0.8rem;

  box-shadow: 0px 4px 2px #c5c5c5;
  background-color: #f5f5f5;
`;
