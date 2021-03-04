import { WelcomeImage } from "../../helpers/getImages";
import DefaultButton from "../../components/shared/buttons/defaultButton";
import {
  Container,
  ButtonsContainer,
  MainContainer,
  InnerContainer,
  HDiv,
} from "./style";
import { useHistory } from "react-router-dom";

const Landing = () => {
  const history = useHistory();

  if (localStorage.authToken) {
    history.push("/page-success");
  }

  return (
    <MainContainer>
      <HDiv>
        <h1>Bem-Vindo!</h1>
      </HDiv>
      <Container>
        <WelcomeImage width="25rem" smallWidth="30rem" />
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
    </MainContainer>
  );
};

export default Landing;
