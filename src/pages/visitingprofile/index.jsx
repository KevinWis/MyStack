import CardProfile from "../../components/shared/cardprofile";
import CardEditProfile from "../../components/shared/cardeditprofile"
import { ContainerProfile, Container } from "./style";
import CartProfileTech from "../../components/shared/cartprofiletech";
import Header from "../../components/shared/header";
import Footer from "../../components/shared/footer";
import { useParams } from "react-router-dom";
import { getUserByIdThunk } from "../../store/modules/members/thunks";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

const VisitingProfile = () => {
  const dispatch = useDispatch();
  const { profileId } = useParams();
  useEffect(() => {
    dispatch(getUserByIdThunk(profileId));
  }, []);
  const { searchedMember } = useSelector((state) => state.members);
  console.log(searchedMember);
  const { techs, name, bio, avatar_url } = searchedMember;
  console.log(techs, name, bio, avatar_url);
  // history.push(`/profile/${profileId}/tech`)
  // history.push(`/profile/${profileId}/works`)
  return (
    <>
      <Header />
      <Container>
        <CardProfile imageUrl={avatar_url} name={name} bio={bio}></CardProfile>
        <ContainerProfile>
          {searchedMember.techs ? (
            searchedMember.techs?.map(({ title, status, id }, index) => (
              <CardEditProfile key={index} title={title} status={status} id={id} />
            ))
          ) : (
            <h1>Ainda não possui habilidades</h1>
          )}
        </ContainerProfile>
        <Footer />
      </Container>
    </>
  );
};

export default VisitingProfile;
