import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import { useHistory } from "react-router-dom";
import DefaultButton from "../../components/shared/buttons/defaultButton";
import { WelcomeTwoImage } from "../../helpers/getImages";
import {
  Form,
  ContainerForm,
  ButtonContainer,
  HDiv,
  StyledTextField,
  ContainerContent,
} from "./style";

const Login = () => {
  const history = useHistory();

  const schema = yup.object({
    email: yup.string().email("Tipo inválido").required("Campo obrigatório"),
    password: yup
      .string()
      .min(3, "Mínimo 3 caractéres")
      .required("Campo obrigatório"),
  });

  const { register, handleSubmit, errors, setError } = useForm({
    resolver: yupResolver(schema),
  });

  const handleForm = async (data) => {
    console.log(data);
    try {
      const res = await axios.post("https://kenziehub.me/sessions", data);
      window.localStorage.setItem("authToken", res.data.auth_token);
      console.log(res);
      // history.push("/members");
    } catch (err) {
      console.log(err);
      setError("password", { message: "Senha ou usuário inválido" });
    }
  };

  return (
    <ContainerForm>
      <HDiv>
        <h1>Login</h1>
      </HDiv>
      <ContainerContent>
        <WelcomeTwoImage width={"25rem"} smallWidth={"25rem"} />

        <Form onSubmit={handleSubmit(handleForm)}>
          <StyledTextField
            margin="normal"
            label="Email"
            name="email"
            inputRef={register}
            error={!!errors.user}
            helperText={errors.user?.message}
          />

          <StyledTextField
            margin="normal"
            label="Senha"
            name="password"
            inputRef={register}
            error={!!errors.password}
            helperText={errors.password?.message}
          />

          <ButtonContainer>
            <DefaultButton
              aria-controls="customized-menu"
              aria-haspopup="true"
              variant="contained"
              color="primary"
              type="submit"
              value={"Entrar"}
            ></DefaultButton>
          </ButtonContainer>

          <ButtonContainer>
            <DefaultButton
              aria-controls="customized-menu"
              aria-haspopup="true"
              variant="contained"
              color="primary"
              onClick={() => history.push("/register/1")}
              value={"Se cadastrar"}
            ></DefaultButton>
          </ButtonContainer>
        </Form>
      </ContainerContent>
    </ContainerForm>
  );
};

export default Login;
