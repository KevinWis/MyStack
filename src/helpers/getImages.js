import Announce from "../images/announce.svg";
import Colab from "../images/colab.svg";
import Employ from "../images/employ.svg";
import Freelance from "../images/freelance.svg";
import OpenSource from "../images/openSource.svg";
import SoftwareDeveloper from "../images/softwareDeveloper.svg";
import Welcome from "../images/welcome.svg";
import ImageComponent from "../components/shared/imageComponent";

export const AnnounceImage = () => {
  return <ImageComponent src={Announce} alt="Announce" />;
};
export const ColabImage = () => {
  return <ImageComponent src={Colab} alt="Colab" />;
};

export const EmployImage = () => {
  return <ImageComponent src={Employ} alt="Employ" />;
};

export const FreelanceImage = () => {
  return <ImageComponent src={Freelance} alt="Freelance" />;
};
export const OpenSourceImage = () => {
  return <ImageComponent src={OpenSource} alt="OpenSource" />;
};

export const SoftwareDeveloperImage = () => {
  return <ImageComponent src={SoftwareDeveloper} alt="SoftwareDeveloper" />;
};

export const WelcomeImage = () => {
  return <ImageComponent src={Welcome} alt="Welcome" />;
};
