import styled from "styled-components";

export const MainContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 5rem 0 3rem 0;
  height: calc(100vh - 8rem);

  margin: 0 auto;
  max-width: 1280px;

  @media (min-width: 640px) {
    padding: 4rem 0 3rem 0;
    min-height: calc(100vh - 7rem);
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 80%;
  background-color: whitesmoke;
  h1 {
    margin-bottom: 1rem;
  }
  img {
    width: 40%;
  }
  @media (min-width: 640px) {
    flex-direction: row;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 60%;
  margin: 0 auto;
  justify-content: space-between;

  button {
    margin-top: 2rem;
    width: 100%;
  }

  @media (min-width: 640px) {
    width: 40%;

    button {
      width: 80%;
    }
  }
`;

export const HDiv = styled.div`
  margin: 1rem;
`;
