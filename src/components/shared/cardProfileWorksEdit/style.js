import styled from "styled-components";

// Card, ContainerCardTitle, ContainerCardContent, ContainerButton,ContainerEditButtons

export const Card = styled.div`
  width: 24rem;
  height: 28rem;
  background-color: #f5f5f5;
  margin: 0 auto;
  text-align: center;
  box-shadow: 2px 2px 2px #c5c5c5;
  margin-bottom: 4vh;
`;
export const Form = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;

  height: 80%;
`;
export const ContainerCardTitle = styled.div`
  height: ${(props) => (props.edit ? "68.5%" : "20%")};
  padding: 5% 0;
  margin: 0.5rem;
  font-weight: 500;
  font-size: 0.9rem;
  word-break: break-word;
  text-overflow: ellipsis;
  overflow: auto;

  h1 {
    margin: 0;
  }
`;
export const ContainerCardContent = styled.div`
  display: ${(props) => (props.edit ? "none" : "block")};
  padding: 5% 0;
  height: 40%;
  width: 80%;
  margin: auto;
  word-break: break-word;
  text-overflow: ellipsis;
  overflow: auto;
`;

export const ContainerButton = styled.div`
  height: 13%;
  button {
    width: 100%;
    height: 100%;
    box-shadow: 0 !important;
  }
  a {
    text-decoration: none;
  }
`;

export const ContainerEditButtons = styled.div`
  width: 24rem;
  background-color: #f5f5f5;
  text-align: center;
  margin-top: 2%;
`;

export const SmButtons = styled.button`
  border: none;
  width: 50%;
  height: 5%;
  transition: 0.25s ease-in-out;
  &.delete {
    background-color: rgba(225, 125, 125);
    &:hover {
      background-color: rgba(250, 125, 125);
    }
  }
  &.edit {
    background-color: rgba(125, 225, 125);
    &:hover {
      background-color: rgba(150, 250, 150);
    }
  }
`;

export const ContainerCardSumary = styled.div`
  width: 100%;
  height: 100%;
`;
