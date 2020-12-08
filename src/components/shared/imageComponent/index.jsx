import {StyledComponentImg} from "./style"
const ImageComponent = ({ src, alt ,width,height}) => {
  return <StyledComponentImg src={src} alt={alt} width={width} height={height}/>;
};
export default ImageComponent;
