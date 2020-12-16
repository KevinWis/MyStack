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
import { updateTech } from "../../../kenzieHub/techs/updateTech";
import { useLocation } from "react-router-dom";
import {getMyProfile} from "../../../kenzieHub/user/myProfile";
import {useDispatch} from "react-redux";
import { deleteTech} from "../../../kenzieHub/techs/deleteTech" 
import {dictionaryIcons} from "../../../helpers/geticons";
import ImageComponent from "../../shared/imageComponent";

const Carteditprofile = ({ status, title ,id }) => {

  const dispatch = useDispatch();
  const { pathname } = useLocation();
  
  const [editable, seteditable] = useState(() => {
    return pathname.includes("/my-profile");
  });

  const [show, setshow] = useState(false);
  const [techUpdateInfo, settechUpdateInfo] = useState({
    status: " ",
  });


  const handclick = () => {
    setshow(!show);
  };
  const sendUpateDispach = async() =>{
    await updateTech(id,techUpdateInfo.status);
    dispatch(getMyProfile())
    setshow(false);
  }
  const sendDeleteDispach = async() =>{
    await deleteTech(id);
    dispatch(getMyProfile())
    setshow(false);
  }

  
  return (
    <>
      <ContainerTech opens={show}>
      <ImageComponent src={dictionaryIcons[title.toLowerCase()] || dictionaryIcons["default"]}   width={"7rem"}></ImageComponent>
        <CardTitulo>
          <h3> {title} </h3>
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
          {show ? (
            <DefaultButton
              _onClick={() => {
                sendUpateDispach()                
              }}
              value={"Enviar"}
            >ENviar</DefaultButton>
          ) : (
            ""
          )}
        </CardTitulo>
        {editable && (
          <CardEdit>
            <FaRegEdit size={20} onClick={handclick} />
            <BsTrash color={"#ff0000"} size={20} onClick={sendDeleteDispach}/>
          </CardEdit>
        )}
      </ContainerTech>
    </>
  );
};

export default Carteditprofile;
