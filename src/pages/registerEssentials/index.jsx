import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useHistory } from "react-router-dom";
import DefaultButton from "../../components/shared/buttons/defaultButton";
import { useDispatch } from "react-redux";
import { FreelanceImage } from "../../helpers/getImages";
import { registerUserThunk } from "../../store/modules/members/thunks.js";

import {
  ContainerContent,
  Form,
  StyledTextField,
  ContainerContentPage,
  ButtonContainer,
  HDiv,
} from "./style";
const RegisterEssentials = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const schema = yup.object({
    name: yup
      .string()
      .min(6, "Mínimo de 6 caracteres")
      .required("Campo obrigatório"),
    email: yup.string().email().required("Campo obrigatório"),
    password: yup
      .string()
      .min(6, "Mínimo de 6 caracteres")
      .required("Campo obrigatório"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "As senhas devem ser iguais!"),
  });

  const { register, handleSubmit, errors, setError } = useForm({
    resolver: yupResolver(schema),
  });

  const handleForm = async (data) => {
    await dispatch(registerUserThunk(data));
    setTimeout(() => {
      history.push("/edit");
    }, 500);
  };
  return (
    <ContainerContentPage>
      <HDiv>
        <h1>Cadastro</h1>
      </HDiv>
      <ContainerContent>
        <FreelanceImage width="25rem" smallWidth="25rem" />
        <Form onSubmit={handleSubmit(handleForm)}>
          <StyledTextField
            margin="normal"
            label="Usuário"
            name="name"
            inputRef={register}
            error={!!errors.name}
            helperText={errors.name?.message}
          />
          <StyledTextField
            margin="normal"
            label="Email"
            name="email"
            inputRef={register}
            error={!!errors.email}
            helperText={errors.email?.message}
          />
          <StyledTextField
            type="password"
            margin="normal"
            label="Senha"
            name="password"
            inputRef={register}
            error={!!errors.password}
            helperText={errors.password?.message}
          />
          <StyledTextField
            type="password"
            margin="normal"
            label="Confirmar Senha"
            name="confirmPassword"
            inputRef={register}
            error={!!errors.password}
            helperText={errors.confirmPassword?.message}
          />
          <ButtonContainer>
            <DefaultButton
              aria-controls="customized-menu"
              aria-haspopup="true"
              variant="contained"
              color="primary"
              value="Registrar"
              type="submit"
            />
          </ButtonContainer>
        </Form>
      </ContainerContent>
    </ContainerContentPage>
  );
};

export default RegisterEssentials;
