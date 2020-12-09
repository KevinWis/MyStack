import Header from "../../components/shared/header";
import Footer from "../../components/shared/footer";
import { WelcomeImage } from "../../helpers/getImages";
import DefaultButton from "../../components/shared/buttons/defaultButton";
import { Container, ButtonsContainer, MainContainer } from "./style";
import { useHistory } from "react-router-dom";

const Landing = () => {
  const history = useHistory();
  return (
    <>
      <MainContainer>
        <Header></Header>
        <Container>
          <h1>Bem vindo!</h1>
          <img src={WelcomeImage}></img>
          <ButtonsContainer>
            <DefaultButton
              value={"Entrar"}
              _onClick={() => history.push("Login")}
            ></DefaultButton>
            <DefaultButton
              value={"Se cadastrar"}
              _onClick={() => history.push("Register")}
            ></DefaultButton>
          </ButtonsContainer>
        </Container>
        <Footer></Footer>
      </MainContainer>
    </>
  );
};

export default Landing;
