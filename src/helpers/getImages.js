import Announce from "../images/announce.svg";
import Colab from "../images/colab.svg";
import Freelance from "../images/freelance.svg";
import OpenSource from "../images/openSource.svg";
import SoftwareDeveloper from "../images/softwareDeveloper.svg";
import Welcome from "../images/welcome.svg";
import ImageComponent from "../components/shared/imageComponent";

export const AnnounceImage = ({width,height}) => {
  return <ImageComponent src={Announce} alt="Announce" width={width} height={height} />;
};
export const ColabImage = () => {
  return <ImageComponent src={Colab} alt="Colab" />;
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
