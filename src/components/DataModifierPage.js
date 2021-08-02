import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { data } from "data/new-data";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
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
  formContainer: {
    width: "30%",
  },
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
    width: "100%",
  },
  inputs: {
    "& >*": {
      marginBottom: 8,
    },
  },
  button: {
    position: "absolute",
    top: 20,
    left: 10,
  },
}));
const DataModifierPage = () => {
  const initialData = data;
  const [state, setState] = useState(initialData);
  const classes = useStyles();
  const stringFields = ["episodeName", "url", "subtitle", "description"];
  const stringArrays = ["members", "guests", "editors"];
  const objectArrays = ["movies"];

  useEffect(() => {
    console.log("state = ", state);
  }, [state]);

  const handleChange = (event, datum, index, fieldName) => {
    datum[fieldName] = event;
    initialData[index] = datum;
    setState([...initialData]);
  };

  const handleArrayValueChange = (event, datum, index, fieldName) => {
    const datumUpdated = { ...datum };

    datumUpdated[fieldName] = event;
    const arrayCopy = [...state];
    arrayCopy[index] = datumUpdated;
    setState(arrayCopy);
  };

  const handleDownload = () => {
    const timestamp = new Date().getTime();
    var data = new Blob([JSON.stringify(state)], { type: "text/json" });
    var csvURL = window.URL.createObjectURL(data);
    var tempLink = document.createElement("a");
    tempLink.href = csvURL;
    tempLink.setAttribute("download", `data-${timestamp}.json`);
    tempLink.click();
  };

  return (
    <div className={classes.mainContainer}>
      <Button
        color="primary"
        variant="contained"
        onClick={handleDownload}
        className={classes.button}
      >
        Download File
      </Button>
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
                <form className={classes.formContainer}>
                  <div className={classes.inputs}>
                    {stringFields.map((fieldName, singleInputIndex) => (
                      <SingleInput
                        id={1 + index * singleInputIndex}
                        datum={datum}
                        fieldName={fieldName}
                        emitNewValue={(newValue) => {
                          handleChange(newValue, datum, index, fieldName);
                        }}
                      ></SingleInput>
                    ))}
                    {stringArrays.map((arrayName, index) => (
                      <div>
                        <MultiselectWithDataAdd
                          array={datum[arrayName]}
                          title={arrayName}
                          key={index}
                          emitValuesChange={(newValue) => {
                            handleArrayValueChange(
                              newValue,
                              datum,
                              index,
                              arrayName
                            );
                          }}
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
