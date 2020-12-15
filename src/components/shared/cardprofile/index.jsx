import {
  Container,
  Cardmain,
  Cardimage,
  ContainerBio,
  Containertitle,
  ContainerBios,
} from "./style";

const CardProfile = ({ imageUrl, name, bio }) => {
  imageUrl = imageUrl?.split(" ").join("%20");
  return (
    <>
      <Container>
        <Cardmain>
          <Cardimage avatar={imageUrl}></Cardimage>
          <ContainerBio>
            <Containertitle>{name}</Containertitle>
            <ContainerBios>
              <p>{bio}</p>
            </ContainerBios>
          </ContainerBio>
        </Cardmain>
      </Container>
    </>
  );
};
export default CardProfile;
