import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
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
}));
const VideoDetailsModifier = (props) => {
  const stringFields = ["episodeName", "url", "subtitle", "description"];
  const stringArrays = ["members", "guests", "editors"];
  const objectArrays = ["movies"];

  const { datum, index } = props;
  const classes = useStyles();

  const [video, setVideo] = useState(datum);

  const handleAccordionChange = (event, isOpened) => {};

  const handleChange = (newValue, datum, fieldName) => {
    datum[fieldName] = newValue;
    setVideo(Object.assign({}, datum));
  };

  return (
    <Accordion onChange={handleAccordionChange}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography className={classes.heading}>{video.episodeName}</Typography>
      </AccordionSummary>
      <AccordionDetails className={classes.accordionDetails}>
        <div className={classes.detailsContainer}>
          <div className={classes.jsonRenderContainer}>
            <pre>{JSON.stringify(video, null, 2)}</pre>
          </div>
          <form className={classes.formContainer}>
            <div className={classes.inputs}>
              {stringFields.map((fieldName, singleInputIndex) => (
                <SingleInput
                  id={singleInputIndex}
                  datum={video}
                  fieldName={fieldName}
                  emitNewValue={(newValue) => {
                    handleChange(newValue, video, fieldName);
                  }}
                ></SingleInput>
              ))}
              {stringArrays.map((arrayName, index) => (
                <div>
                  <MultiselectWithDataAdd
                    array={video[arrayName]}
                    title={arrayName}
                    key={index}
                    emitValuesChange={(newValue) => {
                      handleChange(newValue, video, arrayName);
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
};

export default VideoDetailsModifier;
