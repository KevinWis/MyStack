import CardProfile from "../../components/shared/cardprofile";
import {  ContainerProfile,Container } from "./style";
import CartProfileTech from "../../components/shared/cartprofiletech";
import Header from "../../components/shared/header";
import Footer from "../../components/shared/footer";

const VisitingProfile = () => {
  return (
    <>
    <Header />
    <Container>
    <CardProfile></CardProfile>
      <ContainerProfile>        
        <CartProfileTech> </CartProfileTech>
      </ContainerProfile>
      <Footer />
      </Container>   
    </>
  );
};

export default VisitingProfile;
