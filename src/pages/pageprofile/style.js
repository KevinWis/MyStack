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

export const ContainerCard = styled.div`
  margin-top: 1rem;
  display: flex;
  align-items: flex-end;
  justify-content: space-around;
`;

export const ContainerProfile = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-top: 4rem;
`;
