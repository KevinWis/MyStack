import { StyledRegisterButton } from "./style.js";
import { useHistory } from "react-router-dom";

const RegisterButton = ({ value, _onType, _onClick }) => {
  const history = useHistory();
  return (
    <StyledRegisterButton
      className="default-button"
      variant="outlined"
      color="primary"
      type={_onType}
      onClick={_onClick}
    >
      {value}
    </StyledRegisterButton>
  );
};

export default RegisterButton;
