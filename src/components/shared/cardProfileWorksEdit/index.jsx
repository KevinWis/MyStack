import React from "react";
import {
  Card,
  ContainerCardTitle,
  ContainerCardContent,
  ContainerButton,
  ContainerEditButtons,
  SmButtons,
  ContainerCardSumary,
  Form,
} from "./style";
import Button from "../buttons/defaultButton";
import { TextField } from "@material-ui/core";
import { useState } from "react";
import { BsPencilSquare } from "react-icons/bs";
import { BsFillTrashFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { updateWork } from "../../../kenzieHub/works/updateWork";
import { deleteWork } from "../../../kenzieHub/works/deleteWork";
import { getMyProfile } from "../../../kenzieHub/user/myProfile";

function CardProfileWorksEdit({ title, description, id, url }) {
  const [showEdit, setShowEdit] = useState(false);
  const [workUpdateInfo, setWorkUpdateInfo] = useState({
    title: "",
    description: "",
    workID: id,
  });

  const handleShowEdit = () => {
    setShowEdit(!showEdit);
  };

  const dispatch = useDispatch();

  const sendUpateDispach = async () => {
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
        <ContainerCardSumary>
          <ContainerCardTitle edit={showEdit}>
            {!showEdit ? (
              <h1> {title} </h1>
            ) : (
              <Form>
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
              </Form>
            )}
          </ContainerCardTitle>
          <ContainerCardContent edit={showEdit}>
            <p>{description}</p>
          </ContainerCardContent>
          <ContainerButton>
            {url && (
              <a target="blank" href={url}>
                <Button value="DEMO"></Button>
              </a>
            )}
          </ContainerButton>
          <ContainerEditButtons>
            <SmButtons className="delete" onClick={sendDeleteDispach}>
              <BsFillTrashFill />
            </SmButtons>
            <SmButtons className="edit" onClick={handleShowEdit}>
              <BsPencilSquare />
            </SmButtons>
          </ContainerEditButtons>
        </ContainerCardSumary>
      </Card>
    </>
  );
}

export default CardProfileWorksEdit;
