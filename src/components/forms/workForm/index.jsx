import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import {
  Accordion,
  AccordionSummary,
  Typography,
  TextField,
  TextareaAutosize,
} from "@material-ui/core";
import { StyledAccordionDetails, FormGroup } from "./style";
import { AiFillPlusCircle } from "react-icons/ai";
import DefaultButton from "../../shared/buttons/defaultButton";
import { createWork } from "../../../kenzieHub/works/createWork";
const WorkForm = () => {
  const schema = yup.object({
    title: yup.string().required("Campo obrigatório"),
    description: yup.string().required("Campo obrigatório"),
    deploy_url: yup.string().required("Campo obrigatório"),
  });

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const handleForm = (data) => {
    createWork(data);
    console.log(data);
  };

  return (
    <>
      <Accordion>
        <AccordionSummary
          expandIcon={<AiFillPlusCircle />}
          aria-controls="workAdd"
          id="workAdd"
        >
          <Typography>Adicionar Projeto</Typography>
        </AccordionSummary>
        <StyledAccordionDetails>
          <form onSubmit={handleSubmit(handleForm)}>
            <FormGroup>
              <TextField
                label="Titulo"
                name="title"
                placeholder="Nome do projeto"
                inputRef={register}
                error={!!errors.title}
                helperText={errors.title?.message}
              />
            </FormGroup>
            <FormGroup>
              <TextField
                label="Descrição"
                name="description"
                placeholder="..."
                rows={4}
                multiline
                inputRef={register}
                error={!!errors.description}
                helperText={errors.description?.message}
              />
            </FormGroup>
            <FormGroup>
              <TextField
                label="Url de deploy"
                name="deploy_url"
                placeholder="https://... .vercel.app/"
                inputRef={register}
                error={!!errors.deploy_url}
                helperText={errors.deploy_url?.message}
              />
            </FormGroup>
            <FormGroup>
              <DefaultButton type="submit" value="Adicionar" />
            </FormGroup>
          </form>
        </StyledAccordionDetails>
      </Accordion>
    </>
  );
};

export default WorkForm;
