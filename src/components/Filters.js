import React from "react";
import makeStyles from "@mui/styles/makeStyles";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MatMultiselect from "./MatMultiselect";
import ItemSelect from "./ItemSelect";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  accordion: {
    width: "98%",
  },
  heading: {
    // fontSize: theme.typography.pxToRem(15),
    // fontWeight: theme.typography.fontWeightRegular,
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
