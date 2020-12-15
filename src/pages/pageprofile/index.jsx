import CardProfile from "../../components/shared/cardprofile";
import Carteditprofile from "../../components/shared/cardeditprofile";
import React, { useEffect, useState } from "react";
import { Container, ContainerCard } from "./style";
import { useDispatch, useSelector } from "react-redux";
import { useParams,useHistory } from "react-router-dom";
import { getMyProfile } from "../../kenzieHub/user/myProfile";

const PageProfile = () => {
  const history = useHistory()
  if(!localStorage.authToken){
    history.push('/login')
  }
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

        { techs?.map(({ status, title ,id}, index) => {
          return (
            <ContainerCard key={index}>
              <Carteditprofile status={status} title={title} id={id}></Carteditprofile>
            </ContainerCard>
          );
        })}
      </Container>
    </>
  );
};

export default PageProfile;
