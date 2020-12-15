import { StyledComponentImg } from "./style";
const ImageComponent = ({
  src,
  alt,
  width,
  smallWidth,
  height,
  smallHeight,
  round,
  _func,
}) => {
  return (
    <StyledComponentImg
      src={src}
      alt={alt}
      width={width}
      smallWidth={smallWidth}
      height={height}
      smallHeight={smallHeight}
      round={round}
      onClick={_func}
    />
  );
};
export default ImageComponent;
