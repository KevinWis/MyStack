import styled from "styled-components";

export const MainContainer = styled.div`
  width: 100%;
  padding: 5rem 0 3rem 0;
  height: calc(100vh - 8rem);
  @media (min-width: 640px) {
    padding: 4rem 0 3rem 0;
    height: calc(100vh - 7rem);
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: whitesmoke;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  margin: 0 auto;
  justify-content: space-between;

  button {
    margin-top: 2rem;
  }
  @media (min-width: 640px) {
    width: 40%;
  }
  @media (min-width: 1080px) {
    width: 30%;
  }
`;
