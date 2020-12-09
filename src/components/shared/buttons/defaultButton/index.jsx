import { DefaultSharedButton } from "./style.js";

const DefaultButton = ({ value }) => {
  return (
    <DefaultSharedButton
      className="default-button"
      variant="outlined"
      color="primary"
    >
      {value}
    </DefaultSharedButton>
  );
};

export default DefaultButton;
