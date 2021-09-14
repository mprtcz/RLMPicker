import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Button } from "@material-ui/core";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@material-ui/core";
import SingleInput from "./SingleInput";
import MultiselectWithDataAdd from "./MultiselectWithDataAdd";
import Inputs from "./Inputs";

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
    width: "60%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    "&> *": {
      width: "48%",
    },
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
    color: "white",
  },
}));
const VideoDetailsModifier = (props) => {
  const stringFields = ["episodeName", "url", "subtitle", "description"];
  const stringArrays = ["members", "guests", "editors"];
  const objectArrays = ["moviesData"];
  const movieInfoStringFields = ["title", "year", "technology", "studio"];

  const { datum, onVideoSave } = props;
  const classes = useStyles();

  const [video, setVideo] = useState(datum);
  const [hasChanged, setHasChanged] = useState(false);

  const handleSave = (event) => {
    event.preventDefault();
    event.stopPropagation();

    onVideoSave(video);

    setHasChanged(false);
  };

  const onInputObjectChange = (newValue) => {
    console.log("newValue", newValue);

    if (areEqual(video, newValue)) return;
    setVideo(newValue);

    setHasChanged(true);
  };

  const onNestedInputObjectChange = (newValue, video, index, fieldName) => {
    console.log("newValue", newValue);

    if (areEqual(video, newValue)) return;

    video[fieldName][index] = newValue;

    setVideo(Object.assign({}, video));
    setHasChanged(true);
  };

  const areEqual = (val1, val2) => {
    return JSON.stringify(val1) === JSON.stringify(val2);
  };

  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        {hasChanged ? (
          <Button
            color="primary"
            variant="contained"
            onClick={handleSave}
            className={classes.button}
          >
            Save changes
          </Button>
        ) : (
          ""
        )}
        <Typography className={classes.heading}>{video.episodeName}</Typography>
      </AccordionSummary>
      <AccordionDetails className={classes.accordionDetails}>
        <div className={classes.detailsContainer}>
          <div className={classes.jsonRenderContainer}>
            <pre>{JSON.stringify(video, null, 2)}</pre>
          </div>
          <form className={classes.formContainer}>
            <Inputs
              inputObject={video}
              stringFields={stringFields}
              stringArrays={stringArrays}
              inputObjectChanged={(output) => onInputObjectChange(output)}
            ></Inputs>
            {(objectArrays || []).map((fieldName) => (
              <div>
                {(video[fieldName] || []).map((movieInfo, singleInputIndex) => (
                  <Accordion>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <Typography className={classes.heading}>
                        {singleInputIndex + 1}. {movieInfo.title}
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails className={classes.accordionDetails}>
                      <Inputs
                        inputObject={movieInfo}
                        stringFields={movieInfoStringFields}
                        inputObjectChanged={(output) =>
                          onNestedInputObjectChange(
                            output,
                            video,
                            singleInputIndex,
                            fieldName
                          )
                        }
                      ></Inputs>
                    </AccordionDetails>
                  </Accordion>
                ))}
              </div>
            ))}
          </form>
        </div>
      </AccordionDetails>
    </Accordion>
  );
};

export default VideoDetailsModifier;
