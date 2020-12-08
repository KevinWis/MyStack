import { HeaderDiv } from "./style";
import Img from "./img.svg";

const Header = () => {
  return (
    <>
      <HeaderDiv>
        <h1>My Dev</h1>
        <img src={Img} />
      </HeaderDiv>
    </>
  );
};

export default Header;
