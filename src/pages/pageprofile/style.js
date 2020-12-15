import styled from "styled-components";
import { RadioGroup } from "@material-ui/core";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  margin: 14rem 0 3rem 0;

  @media (min-width: 640px) {
    margin: 10rem 0 3rem 0;
  }
`;

export const ContainerCard = styled.div`
  margin-top: 1rem;
  display: flex;
  align-items: flex-end;
  justify-content: space-around;
`;

export const StyledRadioGroup = styled(RadioGroup)`
  margin: 1rem 0;
  padding: 1rem;

  box-shadow: 0px 4px 2px #c5c5c5;
  background-color: #f5f5f5;
`;

export const ContainerProfile = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-top: 4rem;
`;
