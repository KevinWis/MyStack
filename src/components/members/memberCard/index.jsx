import AppleIcon from "@material-ui/icons/Apple";
import Img from "../../../images/maleavatar.svg";
import {
  Card,
  Body,
  ProfileImage,
  Medias,
  Footer,
  ImageFilter,
  Media,
  UnhoveredText,
  TechIcons
} from "./style";
import {
  AiOutlineHeart,
  AiFillInstagram,
  AiFillYoutube,
  AiFillGithub,
} from "react-icons/ai";
import { ImLinkedin } from "react-icons/im";
import { FaRegComment } from "react-icons/fa";
import { TiArrowForwardOutline } from "react-icons/ti";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import {
  dictionaryIcons
}from '../../../helpers/geticons'
import ImageComponent from "../../shared/imageComponent";

const MemberCard = ({ name, course, id, avatar,UserTechs }) => {
  const history = useHistory();
 

  const [techIcons,setTechIcons] = useState(() => 
    UserTechs?.filter(tech => dictionaryIcons.some(item => item.name == tech.title))
  )
  console.log(techIcons)

  const [medias, setMedias] = useState([
    Math.floor((Math.random() + 1) * 10),
    Math.floor((Math.random() + 1) * 10),
    Math.floor((Math.random() + 1) * 5),
    Math.floor((Math.random() + 1) * 5),
  ]);

  // function getCourseModule(course) {
  //   return course === "undefined"
  //     ? ""
  //     : course.includes("(")
  //     ? course.split("(")[1].replace(")", "")
  //     : course;
  // }
  
  return (
    <>
      <Card>
        <Body>
        <ProfileImage avatar={avatar}>
            <ImageFilter>
              <div className="Dev_Name">
                <p>{name}</p>
                {/* <p>{getCourseModule(course)}</p> */}
              </div>
            </ImageFilter>
          </ProfileImage>
          <Medias>
            <Media>
              <AiFillGithub className="Media_Icon" size="2.8rem" />
            </Media>
            <Media>
              <ImLinkedin className="Media_Icon" size="2.4rem" />
            </Media>
            <Media>
              <AiFillInstagram className="Media_Icon" size="2.8rem" />
            </Media>
            <Media>
              <AiFillYoutube className="Media_Icon" size="2.8rem" />
            </Media>
          </Medias>
          </Body>
            {/* <UnhoveredText><p>{"Instagram Girl Developer"}</p><p>{getCourseModule(course)}</p></UnhoveredText> */}
            <TechIcons>
              {
                techIcons&&
                dictionaryIcons.filter(dictionaryTech => dictionaryTech.name == techIcons[0]?.title)
                .map(icon => <ImageComponent src={icon.img}></ImageComponent>)
              }
              
            </TechIcons>
          <Footer>
          <div className="Icon">
            <AiOutlineHeart size="32px" />
          </div>
          <p>{`${medias[0]}.${medias[1]}`} k</p>
          <div className="Spacer"></div>
          <div className="Icon">
            <FaRegComment size="32px" />
          </div>
          <p>{`${medias[2]}.${medias[3]}`} k</p>
          <div className="Spacer"></div>
          <div className="Icon">
            <TiArrowForwardOutline
              size="32px"
              onClick={() => {
                history.push(`/profile/${id}`);
              }}
            />
          </div>
          <p>Profile</p>
        </Footer>
      </Card>
    </>
  );
};

export default MemberCard;
