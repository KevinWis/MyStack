import { ReturnButton } from "./style";
import { RiArrowGoBackLine } from "react-icons/ri";

const ReturnPageButton = ({ onClick }) => {
  return (
    <>
      <ReturnButton
        onClick={() => {
          window.history.back();
        }}
      >
        <RiArrowGoBackLine size="2.2rem" />
      </ReturnButton>
    </>
  );
};

export default ReturnPageButton;
