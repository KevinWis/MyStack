import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useHistory } from "react-router-dom";
import DefaultButton from "../../components/shared/buttons/defaultButton";
import { WelcomeTwoImage } from "../../helpers/getImages";
import { userLoginThunk } from "../../store/modules/user/thunks.js";
import { useDispatch } from "react-redux";
import {
  Form,
  ContainerForm,
  ButtonContainer,
  HDiv,
  StyledTextField,
  ContainerContent,
} from "./style";

const Login = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  if (localStorage.authToken) {
    history.push("/members");
  }

  const schema = yup.object({
    email: yup.string().email("Tipo inválido").required("Campo obrigatório"),
    password: yup.string().required("Campo obrigatório"),
  });

  const { register, handleSubmit, errors, setError } = useForm({
    resolver: yupResolver(schema),
  });

  const handleForm = async (data) => {
    await dispatch(userLoginThunk(data, setError));
    if (localStorage.getItem("authToken")) {
      history.push("/page-success");
    }
  };

  return (
    <ContainerForm>
      <HDiv>
        <h1>Login</h1>
      </HDiv>
      <ContainerContent>
        <WelcomeTwoImage width={"25rem"} smallWidth={"30rem"} />

        <Form onSubmit={handleSubmit(handleForm)}>
          <StyledTextField
            margin="normal"
            label="Email"
            name="email"
            inputRef={register}
            error={!!errors.email}
          />
          {errors.email && <p type="warning">{errors.email.message}</p>}
          <StyledTextField
            margin="normal"
            label="Senha"
            name="password"
            type="password"
            error={!!errors.password}
            inputRef={register}
          />
          {errors.password && <p type="warning">{errors.password.message}</p>}

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
              value={"Se cadastrar"}
              _onClick={() => history.push("/register")}
            ></DefaultButton>
          </ButtonContainer>
        </Form>
      </ContainerContent>
    </ContainerForm>
  );
};

export default Login;
