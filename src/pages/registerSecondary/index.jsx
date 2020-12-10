import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
// import DefaultButton from "../../components/shared/buttons/defaultButton";
import { IoPersonCircle } from "react-icons/io5";
import AddIcon from "@material-ui/icons/Add";
import { Fab } from "@material-ui/core";
import { ContainerPersonIcon, TextArea } from "./style";
import { Select, MenuItem, InputLabel, TextField } from "@material-ui/core";

const RegisterSeconddary = () => {
  // const history = useHistory();
  const schema = yup.object({
    // avatar_url: yup.string(),
    // techs: yup
    //   .object({
    //     title: yup.string().required(),
    //     status: yup.string().required(),
    //   })
    //   .required("Campo obrigatório"),
    bio: yup
      .string()
      .min(6, "Mínimo de 6 caracteres")
      .required("Campo obrigatório"),
  });

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const handleForm = (data) => {
    console.log(data);
  };

  return (
    <>
      <form onSubmit={handleSubmit(handleForm)}>
        <ContainerPersonIcon>
          <i>
            <IoPersonCircle fontSize="16rem" />
          </i>

          <label htmlFor="upload-photo">
            <input
              style={{ display: "none" }}
              id="upload-photo"
              name="avatar_url"
              inputRef={register}
              error={!!errors.avatar_url}
              helperText={errors.avatar_url?.message}
              type="file"
            />
            <Fab color="primary" size="small" component="span" aria-label="add">
              <AddIcon />
            </Fab>
          </label>
        </ContainerPersonIcon>

        <div>
          <div>
            <TextField
              margin="normal"
              label="Tecnologia"
              name="title"
              inputRef={register}
              error={!!errors.title}
              helperText={errors.title?.message}
            />
          </div>

          <InputLabel id="demo-simple-select-label">Nivel</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            name="status"
            inputRef={register}
            error={!!errors.status}
            helperText={errors.status?.message}
          >
            <MenuItem value="Basic">Iniciante</MenuItem>
            <MenuItem value="Medium">Intermédiário</MenuItem>
            <MenuItem value="Advanced">Avançado</MenuItem>
          </Select>
        </div>
        
        <div>
          <TextArea
            width="24rem"
            rowsMin={4}
            placeholder="Bio"
            aria-label=""
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            name="bio"
            inputRef={register}
            error={!!errors.bio}
            helperText={errors.bio?.message}
          />
        </div>
        <div>
          <button type="submit">Registrar</button>
        </div>
      </form>
    </>
  );
};
export default RegisterSeconddary;
