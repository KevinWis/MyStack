import styled from "styled-components";

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

export const ContainerProfile = styled.div`
  width: 95%;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  align-items: left;

  margin-top: 4rem;
`;
