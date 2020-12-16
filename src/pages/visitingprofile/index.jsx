import CardProfile from "../../components/shared/cardprofile";
import CardEditProfile from "../../components/shared/cardeditprofile";
import { ContainerProfile, Container } from "./style";
import { useParams, useHistory } from "react-router-dom";
import { getUserByIdThunk } from "../../store/modules/members/thunks";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import RadioGroup from "../../components/shared/buttons/radioGroup";

import WorkCard from "../../components/shared/cardProfileWorks";

const VisitingProfile = () => {
  const currentUserId = localStorage.getItem("userId") || "";

  const history = useHistory();
  const dispatch = useDispatch();
  const { profileId } = useParams();

  const [techs, setTechs] = useState([]);
  const [works, setWorks] = useState([]);
  const [radioValue, setRadioValue] = useState("Tech");

  const { searchedMember } = useSelector((state) => state.members);
  const { name, bio, avatar_url } = searchedMember;
  useEffect(() => {
    dispatch(getUserByIdThunk(profileId));
    setTechs(searchedMember.techs);
    setWorks(searchedMember.works);
    redirect();
  }, [searchedMember]);

  const redirect = () => {
    if (currentUserId === profileId) {
      history.push(`/my-profile`);
    }
  };

  return (
    <>
      <Container>
        <CardProfile imageUrl={avatar_url} name={name} bio={bio}></CardProfile>
        <RadioGroup radioValue={radioValue} setRadioValue={setRadioValue} />

        {radioValue === "Tech" && (
          <ContainerProfile>
            {techs && techs.length > 0 ? (
              techs?.map(({ title, status, id }, index) => (
                <CardEditProfile
                  key={index}
                  title={title}
                  status={status}
                  id={id}
                />
              ))
            ) : (
              <h1>Ainda não possui tecnologias registradas</h1>
            )}
          </ContainerProfile>
        )}
        {radioValue === "Work" && (
          <ContainerProfile>
            {works && works.length > 0 ? (
              works?.map(({ title, description }, index) => (
                <WorkCard key={index} title={title} content={description} />
              ))
            ) : (
              <h1>Ainda não possui projetos registrados</h1>
            )}
          </ContainerProfile>
        )}
      </Container>
    </>
  );
};

export default VisitingProfile;
