import Header from "../../components/shared/header";
import Footer from "../../components/shared/footer";
import { WelcomeImage } from "../../helpers/getImages";
import DefaultButton from "../../components/shared/buttons/defaultButton";
import { Container, ButtonsContainer, MainContainer } from "./style";

const Landing = () => {
  return (
    <>
      <MainContainer>
        <Header></Header>
        <Container>
          <h1>Bem vindo!</h1>
          <img src={WelcomeImage}></img>
          <ButtonsContainer>
            <DefaultButton value={"Entrar"} page="/Login"></DefaultButton>
            <DefaultButton
              value={"Se cadastrar"}
              page="/Register"
            ></DefaultButton>
          </ButtonsContainer>
        </Container>
        <Footer></Footer>
      </MainContainer>
    </>
  );
};

export default Landing;
