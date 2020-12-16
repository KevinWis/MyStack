import CardProfile from "../../components/shared/cardprofile";
import Carteditprofile from "../../components/shared/cardeditprofile";
import CardWorksEdit from "../../components/shared/cardProfileWorksEdit";
import React, { useEffect, useState } from "react";
import { Container, ContainerCard, ContainerProfile } from "./style";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { getMyProfile } from "../../kenzieHub/user/myProfile";

import TechForm from "../../components/forms/techForm";
import WorkForm from "../../components/forms/workForm";

import RadioGroup from "../../components/shared/buttons/radioGroup";

const PageProfile = () => {
  const history = useHistory();
  if (!localStorage.authToken) {
    history.push("/login");
  }

  const dispatch = useDispatch();

  const [techs, setTechs] = useState([]);
  const [works, setWorks] = useState([]);
  const [radioValue, setRadioValue] = useState("Tech");

  const { searchedMember } = useSelector((state) => state.members);
  const { name, bio, avatar_url } = searchedMember;
  useEffect(() => {
    dispatch(getMyProfile());
    setTechs(searchedMember.techs);
    setWorks(searchedMember.works);
  }, [searchedMember]);

  const sendDispatch = () => {
    dispatch(getMyProfile());
  };
  return (
    <Container>
      <CardProfile imageUrl={avatar_url} bio={bio} name={name}></CardProfile>
      <RadioGroup radioValue={radioValue} setRadioValue={setRadioValue} />
      {radioValue === "Tech" ? (
        <>
          <TechForm sendDispatch={sendDispatch} />
          {techs && techs.length > 0 ? (
            <ContainerProfile>
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
            </ContainerProfile>
          ) : (
            <h1>Ainda não possui tecnologias registradas</h1>
          )}
        </>
      ) : (
        <>
          <WorkForm sendDispatch={sendDispatch} />
          {works && works.length > 0 ? (
            works?.map(({ description, title, id, deploy_url }, index) => {
              return (
                <ContainerCard key={index}>
                  <CardWorksEdit
                    description={description}
                    title={title}
                    id={id}
                    url={deploy_url}
                  ></CardWorksEdit>
                </ContainerCard>
              );
            })
          ) : (
            <h1>Ainda não possui projetos registrados</h1>
          )}
        </>
      )}
    </Container>
  );
};

export default PageProfile;
