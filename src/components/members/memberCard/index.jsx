import {
  DefaultCard,
  CardName,
  CardTech,
  CardContainer,
  TechContainer,
  ImageContainer,
  PersonContainer,
  PlaceholdeImg,
} from "./style.js";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    backgroundColor: "#43c1d8",
  },
  heading: {
    fontSize: theme.typography.pxToRem(19),
    fontWeight: theme.typography.fontWeightBold,
  },
}));

const MemberCard = () => {
  const classes = useStyles();
  return (
    <>
      <DefaultCard>
        <PersonContainer>
          <ImageContainer>
            <PlaceholdeImg />
          </ImageContainer>
          <CardContainer>
            <CardName>
              <img></img>
              <p></p>
            </CardName>
            <CardTech>
              <img></img>
              <p></p>
            </CardTech>
          </CardContainer>
        </PersonContainer>
        <TechContainer>
          <Accordion className={classes.root}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className={classes.heading}>Tec 1</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>PlaceHolder</Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion className={classes.root}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className={classes.heading}>Tec 2</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>PlaceHolder</Typography>
            </AccordionDetails>
          </Accordion>
        </TechContainer>
      </DefaultCard>
    </>
  );
};

export default MemberCard;
