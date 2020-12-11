import { StyledComponentImg } from "./style";
const ImageComponent = ({ src, alt, width, smallWidth, _func }) => {
  return (
    <StyledComponentImg
      src={src}
      alt={alt}
      width={width}
      smallWidth={smallWidth}
      onClick={_func}
    />
  );
};
export default ImageComponent;
