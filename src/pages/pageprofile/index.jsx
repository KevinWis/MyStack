import CardProfile from "../../components/shared/cardprofile";
import Carteditprofile from "../../components/shared/cardeditprofile";
import React, { useEffect, useState } from "react";
import { Container, ContainerCard } from "./style";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getMyProfile } from "../../kenzieHub/user/myProfile";

import TechForm from "../../components/forms/techForm";
import WorkForm from "../../components/forms/workForm";

const PageProfile = () => {
  const [techs, settechs] = useState([]);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMyProfile());
  }, []);

  const { searchedMember } = useSelector((state) => state.members);

  useEffect(() => {
    settechs(searchedMember.techs);
  }, [searchedMember]);

  return (
    <>
      <Container>
        <CardProfile
          imageUrl={searchedMember.avatar_url}
          bio={searchedMember.bio}
          name={searchedMember.name}
        ></CardProfile>
        <TechForm />
        <WorkForm />
        {techs?.map(({ status, title, id }, index) => {
          return (
            <ContainerCard key={index}>
              <Carteditprofile
                status={status}
                title={title}
                id={id}
              ></Carteditprofile>
            </ContainerCard>
          );
        })}
      </Container>
    </>
  );
};

export default PageProfile;
