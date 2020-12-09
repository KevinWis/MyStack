import {
  MainCardContainer,
  CardContainer,
  ImgContainer,
  DescContainer,
  TechIcons,
  PersonContainer,
} from "./style";
import AppleIcon from "@material-ui/icons/Apple";

const MemberCard = ({ MemberName, MemberWork }) => {
  return (
    <>
      <MainCardContainer>
        <CardContainer>
          <ImgContainer />
          <PersonContainer>
            <DescContainer>
              <h3>{MemberName}</h3> <br />
              <p>{MemberWork}</p>
            </DescContainer>
            <TechIcons>
              <AppleIcon fontSize="large" />
              <AppleIcon fontSize="large" />
              <AppleIcon fontSize="large" />
            </TechIcons>
          </PersonContainer>
        </CardContainer>
      </MainCardContainer>
    </>
  );
};

export default MemberCard;
