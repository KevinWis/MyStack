import {
  MainCardContainer,
  CardContainer,
  ImgContainer,
  DescContainer,
  TechIcons,
  PersonContainer,
} from "./style";
import AppleIcon from "@material-ui/icons/Apple";
import Img from "../../../images/freelance.svg";

const MemberCard = ({ MemberName, MemberWork, _MemberImg }) => {
  return (
    <>
      <MainCardContainer>
        <CardContainer>
          {_MemberImg ? (
            <ImgContainer src={_MemberImg} />
          ) : (
            <ImgContainer src={Img} />
          )}
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
