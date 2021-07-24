import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { data } from "data/new-data";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  accordionDetails: {},
  mainContainer: {},
  jsonRenderContainer: {
    maxWidth: "40%",
    backgroundColor: "#dcedc8",
    padding: 5,
    border: "1px solid #aabb97",
    "&> pre": {
      textAlign: "left",
      whiteSpace: "pre-wrap",
    },
  },
}));
const DataModifierPage = () => {
  const initialData = data;
  const classes = useStyles();

  return (
    <div className={classes.mainContainer}>
      {initialData.map((datum) => {
        return (
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className={classes.heading}>
                {datum.episodeName}
              </Typography>
            </AccordionSummary>
            <AccordionDetails className={classes.accordionDetails}>
              <div className={classes.jsonRenderContainer}>
                <pre>{JSON.stringify(datum, null, 2)}</pre>
              </div>
            </AccordionDetails>
          </Accordion>
        );
      })}
    </div>
  );
};

export default DataModifierPage;
