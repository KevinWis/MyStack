import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { TextField } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import DefaultButton from "../../components/shared/buttons/defaultButton";
import axios from "axios";
import Header from "../../components/shared/header";
import Footer from "../../components/shared/footer";
import { FreelanceImage } from "../../helpers/getImages";
import {
  ContainerImage,
  CardImage,
  ContainerForm,
  ContainerContentForm,
  ButtonContainer,
  ContainerContentPage,
} from "./style";
const RegisterEssencials = () => {
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
        bio: " ",
        contact: " ",
        course_module: " ",
      })
      .then((res) => {
        history.push("/register/2");
      })
      .catch((err) => {
        setError("Não enviou");
      });
  };

  return (
    <>
      <Header />
      <ContainerContentPage>
        <ContainerImage>
          <CardImage>
            <FreelanceImage width="32rem" />
          </CardImage>
        </ContainerImage>

        <ContainerForm>
          <form onSubmit={handleSubmit(handleForm)}>
            <ContainerContentForm>
              <h1>Cadastro</h1>
              <div>
                <TextField
                  margin="normal"
                  label="Usuário"
                  name="name"
                  inputRef={register}
                  error={!!errors.name}
                  helperText={errors.name?.message}
                />
              </div>
              <div>
                <TextField
                  margin="normal"
                  label="Email"
                  name="email"
                  inputRef={register}
                  error={!!errors.email}
                  helperText={errors.email?.message}
                />
              </div>

              <div>
                <TextField
                  type="password"
                  margin="normal"
                  label="Senha"
                  name="password"
                  inputRef={register}
                  error={!!errors.password}
                  helperText={errors.password?.message}
                />
              </div>

              <ButtonContainer>
                <DefaultButton
                  aria-controls="customized-menu"
                  aria-haspopup="true"
                  variant="contained"
                  color="primary"
                  value="Registrar"
                  onType="submit"
                >
                  Registrar
                </DefaultButton>
              </ButtonContainer>
            </ContainerContentForm>
          </form>
        </ContainerForm>
      </ContainerContentPage>
      <Footer />
    </>
  );
};

export default RegisterEssencials;
