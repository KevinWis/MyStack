import React from "react";
import {
  Card,
  ContainerCardTitle,
  ContainerCardContent,
  ContainerButton,
  ContainerEditButtons,
  ButtonDelete,
  ButtonEdit,
  ContainerCardSumary,
} from "./style";
import Button from "../buttons/defaultButton";
import { Tooltip, TextField } from "@material-ui/core";
import { useState } from "react";
import { BsPencilSquare } from "react-icons/bs";
import { BsFillTrashFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { updateWork } from "../../../kenzieHub/works/updateWork";
import { deleteWork } from "../../../kenzieHub/works/deleteWork";
import { getMyProfile } from "../../../kenzieHub/user/myProfile";

function CardProfileWorksEdit({ title, description, id, url }) {
  const [show, setShow] = useState(true);
  const [showEdit, setShowEdit] = useState(false);
  const [workUpdateInfo, setWorkUpdateInfo] = useState({
    title: "",
    description: "",
    workID: id,
  });

  const handleClick = () => {
    // setShow(!show);
  };

  const handleShowEdit = () => {
    setShowEdit(!showEdit);
  };

  const dispatch = useDispatch();

  const sendUpateDispach = async () => {
    console.log(workUpdateInfo);
    await updateWork(workUpdateInfo);
    dispatch(getMyProfile());
    handleShowEdit();
  };
  const sendDeleteDispach = async () => {
    await deleteWork(id);
    dispatch(getMyProfile());
  };

  return (
    <>
      <Card>
        <ContainerCardSumary onClick={handleClick}>
          <ContainerCardTitle>
            {!showEdit ? (
              <h1> {title} </h1>
            ) : (
              <form>
                <TextField
                  label="Novo Titulo"
                  name="title"
                  onChange={(evt) => {
                    setWorkUpdateInfo({
                      ...workUpdateInfo,
                      title: evt.target.value,
                    });
                  }}
                />
                <TextField
                  label="Nova descrição"
                  onChange={(evt) => {
                    setWorkUpdateInfo({
                      ...workUpdateInfo,
                      description: evt.target.value,
                    });
                  }}
                />
                <Button
                  _onClick={() => sendUpateDispach()}
                  value="Enviar"
                  name="description"
                />
              </form>
            )}
          </ContainerCardTitle>
          <ContainerCardContent>
            {!showEdit ? <p>{description}</p> : ""}
          </ContainerCardContent>
          <ContainerButton>
           {url && <a href={url}>
              <Button value="DEMO"></Button>
            </a>}
          </ContainerButton>
        </ContainerCardSumary>

        {show ? (
          <ContainerEditButtons>
            <ButtonDelete onClick={sendDeleteDispach}>
              <BsFillTrashFill />
            </ButtonDelete>
            <ButtonEdit onClick={handleShowEdit}>
              <BsPencilSquare />
            </ButtonEdit>
          </ContainerEditButtons>
        ) : (
          ""
        )}
      </Card>
    </>
  );
}

export default CardProfileWorksEdit;
