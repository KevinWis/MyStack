import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  max-width: 1280px;
  margin: 14rem auto 3rem auto;

  @media (min-width: 640px) {
    margin: 10rem auto 2rem auto;
  }
  h1 {
    margin-top: 2rem;
    text-align: center;
    font-weight: 400;
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

  margin: 0 auto;
  margin-top: 4rem;
`;
