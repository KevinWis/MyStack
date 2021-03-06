import Announce from "../images/announce.svg";
import Colab from "../images/colab.svg";
import Freelance from "../images/freelance.svg";
import OpenSource from "../images/openSource.svg";
import SoftwareDeveloper from "../images/softwareDeveloper.svg";
import Welcome from "../images/welcome.svg";
import logo from "../images/logo.svg";
import ImageComponent from "../components/shared/imageComponent";
import Accessaccount from "../images/Accessaccount.svg";
import Undrawsecurelogin from "../images/undrawsecurelogin.svg";
import Maleavatar from "../images/maleavatar.svg";

export const AnnounceImage = ({ width, smallWidth }) => {
  return (
    <ImageComponent
      src={Announce}
      alt="Announce"
      width={width}
      smallWidth={smallWidth}
    />
  );
};

export const AccessaccountImage = ({ width, smallWidth }) => {
  return (
    <ImageComponent
      src={Accessaccount}
      alt="Accessaccount"
      width={width}
      smallWidth={smallWidth}
    />
  );
};

export const UndrawsecureloginImage = ({ width, smallWidth }) => {
  return (
    <ImageComponent
      src={Undrawsecurelogin}
      alt="Undrawsecurelogin"
      width={width}
      smallWidth={smallWidth}
    />
  );
};

export const MaleavatarImage = ({ width, smallWidth }) => {
  return (
    <ImageComponent
      src={Maleavatar}
      alt="Maleavatar"
      width={width}
      smallWidth={smallWidth}
    />
  );
};

export const ColabImage = ({ width, smallWidth }) => {
  return (
    <ImageComponent
      src={Colab}
      alt="Colab"
      width={width}
      smallWidth={smallWidth}
    />
  );
};

export const FreelanceImage = ({ width, smallWidth }) => {
  return (
    <ImageComponent
      src={Freelance}
      alt="Freelance"
      width={width}
      smallWidth={smallWidth}
    />
  );
};
export const OpenSourceImage = ({ width, smallWidth }) => {
  return (
    <ImageComponent
      src={OpenSource}
      alt="OpenSource"
      width={width}
      smallWidth={smallWidth}
    />
  );
};

export const SoftwareDeveloperImage = ({ width, smallWidth }) => {
  return (
    <ImageComponent
      src={SoftwareDeveloper}
      alt="SoftwareDeveloper"
      width={width}
      smallWidth={smallWidth}
    />
  );
};

export const WelcomeImage = ({ width, smallWidth }) => {
  return (
    <ImageComponent
      src={Welcome}
      alt="Welcome"
      width={width}
      smallWidth={smallWidth}
    />
  );
};
export const WelcomeTwoImage = ({ width, smallWidth }) => {
  return (
    <ImageComponent
      src={Welcome}
      alt="Welcome"
      width={width}
      smallWidth={smallWidth}
    />
  );
};
export const Logo = ({ width, smallWidth, func }) => {
  return (
    <ImageComponent
      src={logo}
      alt="logo"
      width={width}
      smallWidth={smallWidth}
      _func={func}
    />
  );
};
