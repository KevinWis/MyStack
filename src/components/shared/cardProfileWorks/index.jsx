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
        <ContainerCardTitle gutterBottom variant="h5" component="h2">
          <h1> Works </h1>
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
