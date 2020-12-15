import CardProfile from "../../components/shared/cardprofile";
import Carteditprofile from "../../components/shared/cardeditprofile";
import React, { useEffect, useState } from "react";
import { Container, ContainerCard, StyledRadioGroup } from "./style";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getMyProfile } from "../../kenzieHub/user/myProfile";

import TechForm from "../../components/forms/techForm";
import WorkForm from "../../components/forms/workForm";

import { FormControlLabel, Radio } from "@material-ui/core";

const PageProfile = () => {
  const [techs, setTechs] = useState([]);
  const [works, setWorks] = useState([]);
  const [radioValue, setRadioValue] = useState("Tech");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMyProfile());
  }, []);

  const { searchedMember } = useSelector((state) => state.members);

  useEffect(() => {
    setTechs(searchedMember.techs);
    setWorks(searchedMember.works);
  }, [searchedMember]);

  const sendDispatch = () => {
    dispatch(getMyProfile());
  };
  return (
    <>
      <Container>
        <CardProfile
          imageUrl={searchedMember.avatar_url}
          bio={searchedMember.bio}
          name={searchedMember.name}
        ></CardProfile>
        <StyledRadioGroup
          row
          aria-label="view"
          name="view"
          value={radioValue}
          onChange={(evt) => setRadioValue(evt.target.value)}
        >
          <FormControlLabel
            value="Tech"
            control={<Radio />}
            label="Tecnologias"
          />
          <FormControlLabel value="Work" control={<Radio />} label="Projetos" />
        </StyledRadioGroup>
        {radioValue === "Tech" ? (
          <>
            <TechForm sendDispatch={sendDispatch} />
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
          </>
        ) : (
          <>
            <WorkForm sendDispatch={sendDispatch} />
            {works?.map(({ status, title, id }, index) => {
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
          </>
        )}
      </Container>
    </>
  );
};

export default PageProfile;
