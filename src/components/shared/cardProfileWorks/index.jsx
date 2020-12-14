import React from "react";
import {
  Card,
  ContainerCardTitle,
  ContainerCardContent,
  ContainerButton,
} from "./style";
import Button from "../buttons/defaultButton";
// import {
//   Card,
//   CardActionArea,
//   CardActions,
//   CardContent,
//   Typography,
// } from "@material-ui/core";

function CardProfileWorks({ title, content }) {
  return (
    <>
      <Card>
        <ContainerCardTitle>
          <h1> {title} </h1>
        </ContainerCardTitle>
        <ContainerCardContent>{content}</ContainerCardContent>
        <ContainerButton>
          <Button value="DEMO"></Button>
        </ContainerButton>
      </Card>
    </>
  );
}

export default CardProfileWorks;
