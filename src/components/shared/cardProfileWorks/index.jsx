import React from "react";
import {
  Card,
  ContainerCardTitle,
  ContainerCardContent,
  ContainerButton,
  DemoLink,
} from "./style";
import Button from "../buttons/defaultButton";

function CardProfileWorks({ title, content, deployUrl }) {
  return (
    <>
      <Card>
        <ContainerCardTitle>
          <h1> {title} </h1>
        </ContainerCardTitle>
        <ContainerCardContent>{content}</ContainerCardContent>
        <ContainerButton>
          <DemoLink target="blank" href={deployUrl}>
            <Button value="DEMO"></Button>
          </DemoLink>
        </ContainerButton>
      </Card>
    </>
  );
}

export default CardProfileWorks;
