import { useState } from "react";
import {
  ContainerTech,
  CardIcons,
  CardTitulo,
  CardEdit,
  StyledTextField,
} from "./style";
import { BsTrash } from "react-icons/bs";
import { FaRegEdit } from "react-icons/fa";
import { Select, MenuItem, InputLabel } from "@material-ui/core";
import DefaultButton from "../../shared/buttons/defaultButton";
import {updateTech} from "../../../kenzieHub/techs/updateTech";



const Carteditprofile = ({status,title}) => {


  const [show, setshow] = useState(false);
  const [techUpdateInfo, settechUpdateInfo] = useState({
    status: " ",
  });

  console.log(techUpdateInfo);

  

  const handclick = () => {
    setshow(!show);
  };
  
  return (
    <>
      <ContainerTech opens={show}>    
        <CardIcons></CardIcons>
        <CardTitulo>
          <h2> {title} </h2>
          <p> {status}</p>   
          {show ? (
            <div>
              <InputLabel id="select-label">Nivel</InputLabel>
              <Select
                labelId="select-label"
                id="select"
                onChange={(evt) => {
                  settechUpdateInfo({
                    status: evt.target.value,
                  });
                }}
              >
                <MenuItem value={"Iniciante"}>Iniciante</MenuItem>
                <MenuItem value={"Intermédiário"}>Intermédiário</MenuItem>
                <MenuItem value={"Avançado"}>Avançado</MenuItem>
              </Select>
            </div>
          ) : (
            ""
          )}
          {
            show ? <DefaultButton onClick={()=>{updateTech(techUpdateInfo)}} value={"Enviar"} />: ""
          }
        </CardTitulo>

        <CardEdit>
          <FaRegEdit size={20} onClick={handclick} />
          <BsTrash color={"#ff0000"} size={20} />
        </CardEdit>
      </ContainerTech>
    </>
  );
};

export default Carteditprofile;
