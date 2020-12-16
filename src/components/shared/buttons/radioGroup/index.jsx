import { StyledRadioGroup } from "./style";
import { FormControlLabel, Radio } from "@material-ui/core";
const RadioGroup = ({ radioValue, setRadioValue }) => {
  return (
    <StyledRadioGroup
      row
      aria-label="view"
      name="view"
      value={radioValue}
      onChange={(evt) => setRadioValue(evt.target.value)}
      color="primary"
    >
      <FormControlLabel value="Tech" control={<Radio />} label="Tecnologias" />
      <FormControlLabel value="Work" control={<Radio />} label="Projetos" />
    </StyledRadioGroup>
  );
};
export default RadioGroup;
