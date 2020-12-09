import {
  MainCardContainer,
  ImgContainer,
  CardContainer,
  PersonContainer,
  DescContainer,
  TechIcons,
  FullimageContaner,
} from "./style";

const memberCardhover = () => {
  return (
    <>
      <MainCardContainer>
        <CardContainer>
          <FullimageContaner>
            <DescContainer>
              <h3>Nome</h3>
            </DescContainer>
          </FullimageContaner>
          <PersonContainer></PersonContainer>
          <TechIcons>
            <p>teste</p>
            <p>teste</p>
            <p>teste</p>
          </TechIcons>
        </CardContainer>
      </MainCardContainer>
    </>
  );
};

export default memberCardhover;
