import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useHistory } from "react-router-dom";
import DefaultButton from "../../components/shared/buttons/defaultButton";
import axios from "axios";
import { FreelanceImage } from "../../helpers/getImages";

import {
  ContainerContent,
  Form,
  StyledTextField,
  ContainerContentPage,
  ButtonContainer,
  HDiv,
} from "./style";
const RegisterEssentials = () => {
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
  });

  const { register, handleSubmit, errors, setError } = useForm({
    resolver: yupResolver(schema),
  });

  const handleForm = (data) => {
    console.log(data);
    axios
      .post("https://kenziehub.me/users", {
        ...data,
        bio: "Bio",
        contact: "111111111",
        course_module: "Your Course",
      })
      .then((res) => {
        history.push("/register/2");
      })
      .catch((err) => {
        setError("Não enviou");
      });
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

          <ButtonContainer>
            <DefaultButton
              aria-controls="customized-menu"
              aria-haspopup="true"
              variant="contained"
              color="primary"
              value="Registrar"
              _onType="submit"
            />
          </ButtonContainer>
        </Form>
      </ContainerContent>
    </ContainerContentPage>
  );
};

export default RegisterEssentials;
