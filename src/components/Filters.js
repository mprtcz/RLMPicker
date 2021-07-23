import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MatMultiselect from "./MatMultiselect";
import ItemSelect from "./ItemSelect";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  accordion: {
    width: "90%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

const Filters = (props) => {
  const classes = useStyles();
  const { episodesData, onSelect } = props;

  return (
    <Accordion className={classes.accordion}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography className={classes.heading}>Filters</Typography>
      </AccordionSummary>
      <AccordionDetails className="filters-container">
        <MatMultiselect
          title="Select Cast"
          data={episodesData}
          filterType="members"
          onSelect={(e) => onSelect(e)}
        />
        <MatMultiselect
          title="Select Guests"
          data={episodesData}
          filterType="guests"
          onSelect={(e) => onSelect(e)}
        />
        <MatMultiselect
          title="Select Editor"
          data={episodesData}
          filterType="editors"
          onSelect={(e) => onSelect(e)}
        />
        <ItemSelect items={episodesData} onSelect={(e) => onSelect(e)} />
      </AccordionDetails>
    </Accordion>
  );
};

export default Filters;
