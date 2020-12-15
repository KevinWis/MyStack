import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import * as yup from "yup";
import {
  Accordion,
  AccordionSummary,
  Typography,
  TextField,
  Select,
  MenuItem,
  InputLabel,
} from "@material-ui/core";
import { StyledAccordionDetails, FormGroup } from "./style";
import { AiFillPlusCircle } from "react-icons/ai";
import DefaultButton from "../../shared/buttons/defaultButton";
import { createTech } from "../../../kenzieHub/techs/createTech";
const TechForm = ({ sendDispatch }) => {
  const [level, setLevel] = useState("Iniciante");
  const schema = yup.object({
    title: yup.string().required("Campo obrigatório"),
  });

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const handleForm = (data) => {
    createTech(data);
    sendDispatch();
    console.log(data);
  };

  return (
    <>
      <Accordion>
        <AccordionSummary
          expandIcon={<AiFillPlusCircle />}
          aria-controls="techAdd"
          id="techAdd"
        >
          <Typography>Adicionar Tech</Typography>
        </AccordionSummary>
        <StyledAccordionDetails>
          <form onSubmit={handleSubmit(handleForm)}>
            <FormGroup>
              <TextField
                label="Titulo"
                name="title"
                placeholder="Titulo da Tecnologia"
                inputRef={register}
                error={!!errors.title}
                helperText={errors.title?.message}
              />
            </FormGroup>
            <FormGroup>
              <InputLabel id="techNivel">Nivel</InputLabel>
              <Select
                labelId="techNivel"
                inputRef={register}
                value={level}
                onChange={(evt) => setLevel(evt.target.value)}
              >
                <MenuItem value="Iniciante">Iniciante</MenuItem>
                <MenuItem value="Intermediário">Intermediário</MenuItem>
                <MenuItem value="Avançado">Avançado</MenuItem>
              </Select>
            </FormGroup>
            <TextField
              name="status"
              inputRef={register}
              hidden
              value={level}
              style={{ display: "none" }}
            />
            <FormGroup>
              <DefaultButton type="submit" value="Adicionar" />
            </FormGroup>
          </form>
        </StyledAccordionDetails>
      </Accordion>
    </>
  );
};

export default TechForm;
