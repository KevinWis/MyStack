import styled from "styled-components";

export const ContainerImage = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5rem 5rem 3rem 5rem;
  justify-content: center;
  align-items: center;
  background-color: whitesmoke;

  margin: 0 auto;
  max-width: 1080px;
`;
export const CardImage = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;

  margin: 2rem 0;

  p {
    width: 80%;
  }

  @media (min-width: 640px) {
    flex-direction: row;
    p {
      width: 40%;
    }
    :nth-child(odd) {
      flex-direction: row-reverse;
      p {
        margin-right: auto;
      }
    }
  }
`;
