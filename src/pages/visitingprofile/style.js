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

export const ContainerProfile = styled.div`
  width: 95%;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  align-items: center;

  margin: 0 auto;
  margin-top: 2rem;
`;
