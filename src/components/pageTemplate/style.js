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
    height: calc(100vh - 7rem);
  }
`;

export const ContainerContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 80%;
  width: 100%;
  text-align: center;

  flex: 1 1 0;
  img {
    width: 40%;
  }
  @media (min-width: 640px) {
    flex-direction: row;
    justify-content: space-around;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 60%;
  margin: 0 auto;
  justify-content: space-between;
  margin-top: 3rem;
  button {
    margin-top: 2rem;
    width: 100%;
  }

  @media (min-width: 640px) {
    width: 40%;
    margin: 3rem;
    button {
      width: 80%;
    }
  }
`;
