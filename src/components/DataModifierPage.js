import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { data } from "data/new-data";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  TextField,
  Typography,
} from "@material-ui/core";
import SingleInput from "./SingleInput";
import MultiselectWithDataAdd from "./MultiselectWithDataAdd";

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
    marginRight: 15,
    "&> pre": {
      textAlign: "left",
      whiteSpace: "pre-wrap",
    },
  },
  detailsContainer: {
    display: "flex",
  },
}));
const DataModifierPage = () => {
  const initialData = data;
  const [state, setState] = useState(initialData);
  const classes = useStyles();
  const stringFields = ["episodeName", "url", "subtitle", "description"];
  const stringArrays = ["members", "guests", "editors"];
  const objectArrays = ["movies"];

  const handleChange = (event, datum, index, fieldName) => {
    datum[fieldName] = event;
    initialData[index] = datum;
    setState([...initialData]);
  };

  return (
    <div className={classes.mainContainer}>
      {initialData.map((datum, index) => {
        const datumCopy = JSON.parse(JSON.stringify(datum));
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
              <div className={classes.detailsContainer}>
                <div className={classes.jsonRenderContainer}>
                  <pre>{JSON.stringify(datumCopy, null, 2)}</pre>
                </div>
                <form>
                  <div className="inputs">
                    {stringFields.map((fieldName) => (
                      <div>
                        <SingleInput
                          datum={datum}
                          fieldName={fieldName}
                          emitNewValue={(newValue) => {
                            handleChange(newValue, datum, index, fieldName);
                          }}
                        ></SingleInput>
                      </div>
                    ))}
                    {stringArrays.map((arrayName, index) => (
                      <div>
                        <MultiselectWithDataAdd
                          array={datum[arrayName]}
                          title={arrayName}
                          key={index}
                        ></MultiselectWithDataAdd>
                      </div>
                    ))}
                  </div>
                </form>
              </div>
            </AccordionDetails>
          </Accordion>
        );
      })}
    </div>
  );
};

export default DataModifierPage;
