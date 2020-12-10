import { DefaultSharedButton } from "./style.js";
const DefaultButton = ({ value, type, _onClick }) => {
  return (
    <DefaultSharedButton
      className="default-button"
      variant="outlined"
      color="primary"
      onClick={_onClick}
      type={type}
    >
      {value}
    </DefaultSharedButton>
  );
};

export default DefaultButton;
