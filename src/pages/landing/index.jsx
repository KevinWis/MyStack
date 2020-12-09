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
          <WelcomeImage width="30rem" height="30rem" />
          <ButtonsContainer>
            <DefaultButton
              value={"Entrar"}
              _onClick={() => history.push("/login")}
            ></DefaultButton>
            <DefaultButton
              value={"Se cadastrar"}
              _onClick={() => history.push("/register")}
            ></DefaultButton>
          </ButtonsContainer>
        </Container>
        <Footer></Footer>
      </MainContainer>
    </>
  );
};

export default Landing;
