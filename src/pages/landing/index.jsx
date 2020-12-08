import Button from "@material-ui/core/Button";
import styled from "styled-components";
import Header from "../../components/shared/header";
import Footer from "../../components/shared/footer";
import Img from "./img.svg";
import DefaultButton from "../../components/shared/buttons/defaultButton";

const MainContainer = styled.div`
  width: 100vw;
  height: 100vh;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 85vh;
  background-color: whitesmoke;
`;

const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 10%;
  margin: 0 auto;
  justify-content: space-between;
`;

const Landing = () => {
  return (
    <>
      <MainContainer>
        <Header>teste</Header>
        <Container>
          <h1>Bem vindo!</h1>
          <img src={Img}></img>
          <ButtonsContainer>
            <DefaultButton value={"Entrar"}></DefaultButton>
            <DefaultButton value={"Se cadastrar"}></DefaultButton>
          </ButtonsContainer>
        </Container>
        <Footer>teste</Footer>
      </MainContainer>
    </>
  );
};

export default Landing;
