import CardProfile from "../../components/shared/cardprofile";
import CardEditProfile from "../../components/shared/cardeditprofile"
import { ContainerProfile, Container } from "./style";
import CartProfileTech from "../../components/shared/cartprofiletech";
import Header from "../../components/shared/header";
import Footer from "../../components/shared/footer";
import { useParams, useLocation, useHistory } from "react-router-dom";
import { getUserByIdThunk } from "../../store/modules/members/thunks";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import DefaultButton from '../../components/shared/buttons/defaultButton'

const VisitingProfile = () => {
  const history = useHistory()
  const dispatch = useDispatch();
  const { profileId } = useParams();
  const { pathname } = useLocation()
  useEffect(() => {
    dispatch(getUserByIdThunk(profileId));
  }, []);

  const { searchedMember } = useSelector((state) => state.members);
  // console.log(searchedMember);
  const { techs, name, bio, avatar_url } = searchedMember;
  // console.log(techs, name, bio, avatar_url);
  // 
  // 
  const redirect = () => {
    if(pathname.includes('/tech')){
      history.push(`/profile/${profileId}/works`)
    }
    if(pathname.includes('/works')){
      history.push(`/profile/${profileId}/tech`)
    }
  }
  
  return (
    <>
      <Header />
      <Container>
        <CardProfile imageUrl={avatar_url} name={name} bio={bio}></CardProfile>
        <DefaultButton _onClick={redirect} value={pathname.includes('/tech') ? 'Trabalhos':'Tecnologias'}/>
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
