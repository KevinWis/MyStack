import Button from "@material-ui/core/Button";

const DefaultButton = ({ value }) => {
  return (
    <Button variant="outlined" color="primary">
      {value}
    </Button>
  );
};

export default DefaultButton;
