import { WelcomeImage } from "../../helpers/getImages";
import DefaultButton from "../../components/shared/buttons/defaultButton";
import {
  Container,
  ButtonsContainer,
  MainContainer,
  InnerContainer,
} from "./style";
import { useHistory } from "react-router-dom";

const Landing = () => {
  const history = useHistory();

  if (localStorage.authToken) {
<<<<<<< HEAD
    history.push("/members");
=======
    history.push("/page-success");
>>>>>>> f7d8b21ce41617c49ab6875bde3908cc9513520e
  }

  return (
    <>
      <MainContainer>
        <Container>
          <h1>Bem-Vindo!</h1>
          <InnerContainer>
            <WelcomeImage width="25rem" smallWidth="25rem" />
            <ButtonsContainer>
              <DefaultButton
                value={"Entrar"}
                _onClick={() => history.push("/login")}
              ></DefaultButton>
              <DefaultButton
                value={"Se cadastrar"}
                _onClick={() => history.push("/register/1")}
              ></DefaultButton>
            </ButtonsContainer>
          </InnerContainer>
        </Container>
      </MainContainer>
    </>
  );
};

export default Landing;
