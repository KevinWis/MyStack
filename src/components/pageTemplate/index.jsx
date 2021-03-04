import { Content, MainContainer, ContainerContent } from "./style";

const PageTemplate = ({ title, Image, children }) => {
  return (
    <MainContainer>
      <h1>{title}</h1>
      <ContainerContent>
        <Image width={"25rem"} smallWidth={"30rem"} />
        <Content>{children}</Content>
      </ContainerContent>
    </MainContainer>
  );
};

export default PageTemplate;
