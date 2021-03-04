import { WelcomeImage } from "../../helpers/getImages";
import DefaultButton from "../../components/shared/buttons/defaultButton";
import { useHistory } from "react-router-dom";
import PageTemplate from "../../components/pageTemplate";

const Landing = () => {
  const history = useHistory();

  if (localStorage.authToken) {
    history.push("/page-success");
  }

  return (
    <PageTemplate title="Bem-vindo" Image={WelcomeImage}>
      <DefaultButton
        value={"Entrar"}
        _onClick={() => history.push("/login")}
      ></DefaultButton>
      <DefaultButton
        value={"Se cadastrar"}
        _onClick={() => history.push("/register")}
      ></DefaultButton>
    </PageTemplate>
  );
};

export default Landing;
