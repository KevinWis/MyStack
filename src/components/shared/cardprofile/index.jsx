import { Container, Cardmain, Cardimage, ContainerBio,Containertitle,ContainerBios} from "./style";

const CardProfile = () => {
  return (
    <>
      <Container>
        <Cardmain>
          <Cardimage>
          </Cardimage>
          <ContainerBio>
            <Containertitle>Instragram Girl Developer</Containertitle>
            <ContainerBios>
              <p>
              Lorem ipsum dolor sit amet consectetur adipiscing elit volutpat
              aenean, fringilla odio consequat sed feugiat ullamcorper pulvinar
              neque eros, nunc phasellus metus dapibus purus arcu tristique
              aliquam. Orci sapien metus eu conubia torquent elementum hendrerit
              tincidunt rhoncus habitant
              </p>
            </ContainerBios>
          </ContainerBio>
        </Cardmain>
      </Container>
    </>
  );
};
export default CardProfile;
