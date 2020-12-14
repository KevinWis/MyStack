import CardProfile from "../../components/shared/cardprofile";
import Carteditprofile from "../../components/shared/cardeditprofile";
import React from "react";
import { Container } from "./style";

const PageProfile = () => {
  
  return (
    <>
      <Container>
        <CardProfile></CardProfile>

        <Carteditprofile></Carteditprofile>
      </Container>
    </>
  );
};

export default PageProfile;
