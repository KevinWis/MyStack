import CardProfile from "../../components/shared/cardprofile";
import CardEditProfile from "../../components/shared/cardeditprofile";
import { ContainerProfile, Container } from "./style";
import CartProfileTech from "../../components/shared/cartprofiletech";
import Header from "../../components/shared/header";
import Footer from "../../components/shared/footer";
import { useParams, useLocation, useHistory } from "react-router-dom";
import { getUserByIdThunk } from "../../store/modules/members/thunks";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import DefaultButton from "../../components/shared/buttons/defaultButton";

import WorkCard from "../../components/shared/cardProfileWorks";

const VisitingProfile = () => {
  const [currentUserId, setCurrentUserId] = useState(
    localStorage.getItem("userId") || ""
  );

  const history = useHistory();
  const dispatch = useDispatch();
  const { profileId } = useParams();
  const { pathname } = useLocation();

  useEffect(() => {
    dispatch(getUserByIdThunk(profileId));
    redirect();
  }, []);

  const { searchedMember } = useSelector((state) => state.members);

  const { techs, name, bio, avatar_url } = searchedMember;

  const redirect = () => {
    if (pathname.includes("/tech")) {
      history.push(`/profile/${profileId}/works`);
    }
    if (pathname.includes("/works")) {
      history.push(`/profile/${profileId}/tech`);
    }
    if (currentUserId === profileId) {
      history.push(`/my-profile`);
    }
  };

  return (
    <>
      <Container>
        <CardProfile imageUrl={avatar_url} name={name} bio={bio}></CardProfile>
        <DefaultButton
          _onClick={redirect}
          value={pathname.includes("/tech") ? "Trabalhos" : "Tecnologias"}
        />
        {pathname.includes("/works") && (
          <ContainerProfile>
            {searchedMember.works &&
              searchedMember.works?.map(({ title, description }, index) => (
                <WorkCard key={index} title={title} content={description} />
              ))}
          </ContainerProfile>
        )}
        {pathname.includes("/tech") && (
          <ContainerProfile>
            {searchedMember.techs ? (
              searchedMember.techs?.map(({ title, status, id }, index) => (
                <CardEditProfile
                  key={index}
                  title={title}
                  status={status}
                  id={id}
                />
              ))
            ) : (
              <h1>Ainda não possui habilidades</h1>
            )}
          </ContainerProfile>
        )}
      </Container>
    </>
  );
};

export default VisitingProfile;
