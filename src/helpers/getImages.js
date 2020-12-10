import Announce from "../images/announce.svg";
import Colab from "../images/colab.svg";
import Freelance from "../images/freelance.svg";
import OpenSource from "../images/openSource.svg";
import SoftwareDeveloper from "../images/softwareDeveloper.svg";
import Welcome from "../images/welcome.svg";
import ImageComponent from "../components/shared/imageComponent";
import Accessaccount from "../images/Accessaccount.svg";
import Undrawsecurelogin from "../images/undrawsecurelogin.svg";
import Maleavatar from "../images/maleavatar.svg";



export const AccessaccountImage = ({width,height}) => {
  return <ImageComponent src={Accessaccount} alt="Accessaccount" width={width} height={height} />;
};
export const UndrawsecureloginImage = ({width,height}) => {
  return <ImageComponent src={Undrawsecurelogin} alt="Undrawsecurelogin" width={width} height={height} />;
};
export const MaleavatarImage = ({width,height}) => {
  return <ImageComponent src={Maleavatar} alt="Maleavatar" width={width} height={height} />;
};



export const AnnounceImage = ({width,height}) => { 
  return <ImageComponent src={Announce} alt="Announce" width={width} height={height} />;
};
export const ColabImage = ({width,height}) => {
  return <ImageComponent src={Colab} alt="Colab" width={width} height={height} />;
};

export const FreelanceImage = ({width,height}) => {
  return <ImageComponent src={Freelance} alt="Freelance" width={width} height={height} />;
};
export const OpenSourceImage = ({width,height}) => {
  return <ImageComponent src={OpenSource} alt="OpenSource" width={width} height={height} />;
};

export const SoftwareDeveloperImage = ({width,height}) => {
  return <ImageComponent src={SoftwareDeveloper} alt="SoftwareDeveloper" width={width} height={height} />;
};

export const WelcomeImage = ({width,height}) => {
  return <ImageComponent src={Welcome} alt="Welcome"  width={width} height={height}/>;
};
