import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { MdAddAPhoto } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";

import { getMyProfile } from "../../kenzieHub/user/myProfile";
import {
  ContainerForm,
  ContainerPersonIcon,
  ContainerTechs,
  ContainerTitle,
  ContainerStatus,
  ContainerBio,
  ContainerButton,
  ContainerPersonPhoto,
  ContainerIcon,
  FabComponent,
  SelectLevel,
  Form,
} from "./style";
import {
  MenuItem,
  InputLabel,
  TextField,
  Checkbox,
  Accordion,
  AccordionSummary,
  Typography,
  AccordionDetails,
} from "@material-ui/core";

import DefaultButton from "../../components/shared/buttons/defaultButton";
import ImageComponent from "../../components/shared/imageComponent";
import { updateUserProfilePicture } from "../../kenzieHub/user/updateProfileInfo";
import { MaleavatarImage } from "../../helpers/getImages";
import { updateUserInfo } from "../../kenzieHub/user/updateUser";

import { useState, useEffect } from "react";

const RegisterSeconddary = () => {
  const dispatch = useDispatch();
  const [image, setimage] = useState();
  const [checkChangePass, setCheckChangePass] = useState();

  const [avatarUrl, setAvatarUrl] = useState();
  const [selectStatus, setSelectStatus] = useState(" ");
  const [contactValue, setContactValue] = useState(" ");
  const [bioValue, setBioValue] = useState(" ");

  const history = useHistory();
  const schema = yup.object().shape({
    contact: yup.string().required("Campo obrigatório"),
    course_module: yup.string().required("Campo obrigatório"),
    bio: yup
      .string()
      .min(6, "Mínimo de 6 caracteres")
      .required("Campo obrigatório"),
    password: yup.string().min(6, "Mínimo de 6 caracteres"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "As senhas devem ser iguais!"),
  });

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    localStorage.getItem("authToken") || history.push("/");
    dispatch(getMyProfile());
  }, []);
  const { searchedMember } = useSelector((state) => state.members);

  const handleForm = async (data) => {
    console.log(data);
    updateUserInfo(data);
    if (image) {
      const newData = new FormData();
      newData.append("avatar", image);
      console.log(newData);
      await updateUserProfilePicture(newData);
    }
    setTimeout(() => {
      history.push("/my-profile");
    }, 500);
  };

  const handleImage = (evt) => {
    setimage(evt.target.files[0]);
  };

  useEffect(() => {
    setSelectStatus(searchedMember.course_module || "");
    setContactValue(searchedMember.contact || "");
    setBioValue(searchedMember.bio || "");
    setAvatarUrl(searchedMember.avatar_url || "");
  }, [searchedMember]);
  return (
    <>
      <ContainerForm>
        <Form onSubmit={handleSubmit(handleForm)}>
          <ContainerPersonIcon>
            <ContainerPersonPhoto>
              {image ? (
                <ImageComponent
                  src={URL.createObjectURL(image)}
                  width="16rem"
                  smallWidth="9rem"
                  height="16rem"
                  smallHeight="9rem"
                  round
                />
              ) : avatarUrl ? (
                <ImageComponent
                  src={avatarUrl}
                  width="16rem"
                  smallWidth="9rem"
                  height="16rem"
                  smallHeight="9rem"
                  round
                />
              ) : (
                <MaleavatarImage
                  width="16rem"
                  smallWidth="9rem"
                  height="16rem"
                  smallHeight="9rem"
                  round
                />
              )}
            </ContainerPersonPhoto>
            <ContainerIcon>
              <label htmlFor="avatar">
                <input
                  style={{ display: "none" }}
                  id="avatar"
                  name="avatar_url"
                  ref={register}
                  error={!!errors.avatar_url}
                  helperText={errors.avatar_url?.message}
                  type="file"
                  onChange={handleImage}
                />
                <FabComponent
                  color="primary"
                  size="small"
                  component="span"
                  aria-label="add"
                >
                  <MdAddAPhoto fontSize="2rem" />
                </FabComponent>
              </label>
            </ContainerIcon>
          </ContainerPersonIcon>

          <ContainerTechs>
            <ContainerTitle>
              <TextField
                fullWidth
                margin="normal"
                label="Contato"
                name="contact"
                value={contactValue}
                onChange={(evt) => {
                  setContactValue(evt.target.value);
                }}
                inputRef={register}
                error={!!errors.contact}
                helperText={errors.contact?.message}
              />
            </ContainerTitle>
            <TextField
              style={{ display: "none" }}
              name="course_module"
              inputRef={register}
              error={!!errors.contact}
              helperText={errors.contact?.message}
              value={selectStatus}
            />
            <ContainerStatus>
              <InputLabel id="select-label">Módulo</InputLabel>
              <SelectLevel
                labelId="select-label"
                id="select"
                inputRef={register}
                error={!!errors.course_module}
                helperText={errors.course_module?.message}
                value={selectStatus}
                onChange={(evt) => setSelectStatus(evt.target.value)}
              >
                <MenuItem value={"Módulo 1 - Front-end Iniciante"}>
                  Módulo 1 - Front-end Iniciante
                </MenuItem>
                <MenuItem value={"Módulo 2 - Front-end Avançado"}>
                  Módulo 2 - Front-end Avançado
                </MenuItem>
                <MenuItem value={"Módulo 3 - Back-end Iniciante"}>
                  Módulo 3 - Back-end Iniciante
                </MenuItem>
                <MenuItem value={"Módulo 4 - Back-end Avançado"}>
                  Módulo 4 - Back-end Avançado
                </MenuItem>
              </SelectLevel>
            </ContainerStatus>
          </ContainerTechs>

          <ContainerBio>
            <TextField
              fullWidth
              rows={6}
              multiline
              placeholder="Bio"
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              name="bio"
              value={bioValue}
              onChange={(evt) => {
                setBioValue(evt.target.value);
              }}
              inputRef={register}
              error={!!errors.bio}
              helperText={errors.bio?.message}
            />
          </ContainerBio>
          <Accordion>
            <AccordionSummary
              expandIcon={""}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <InputLabel id="checkPass">Change password</InputLabel>
              <Checkbox
                labelId="checkPass"
                checked={checkChangePass}
                onChange={(evt) => {
                  setCheckChangePass(evt.target.checked);
                }}
                color="primary"
                inputProps={{ "aria-label": "Alterar senha" }}
              />
            </AccordionSummary>
            <AccordionDetails>
              <TextField
                type="password"
                margin="normal"
                label="Senha anterior"
                name="old_password"
                inputRef={register}
                error={!!errors.password}
                helperText={errors.password?.message}
                disabled={!checkChangePass}
              />
              <TextField
                type="password"
                margin="normal"
                label="Senha"
                name="password"
                inputRef={register}
                error={!!errors.password}
                helperText={errors.password?.message}
                disabled={!checkChangePass}
              />
              <TextField
                type="password"
                margin="normal"
                label="Confirmar Senha"
                name="confirmPassword"
                inputRef={register}
                error={!!errors.password}
                helperText={errors.confirmPassword?.message}
                disabled={!checkChangePass}
              />
            </AccordionDetails>
          </Accordion>

          <ContainerButton>
            <DefaultButton type="submit" value="Enviar" />
          </ContainerButton>
        </Form>
      </ContainerForm>
    </>
  );
};
export default RegisterSeconddary;
