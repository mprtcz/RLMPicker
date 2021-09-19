import React, { useEffect, useState } from "react";
import makeStyles from "@mui/styles/makeStyles";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import {
  Accordion,
  Card,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import Inputs from "./Inputs";
import { getNewEmptyMovieObject } from "data/new-data";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    // fontSize: theme.typography.pxToRem(15),
    // fontWeight: theme.typography.fontWeightRegular,
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
  card: {
    padding: "8px",
  },
  jsonRenderContainer: {
    maxWidth: "35%",
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
  addMovieButton: {
    margin: 8,
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
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    console.log("video", video);
  }, [video]);

  const handleSave = (event) => {
    event.preventDefault();
    event.stopPropagation();

    onVideoSave(video);

    setHasChanged(false);
  };

  const onInputObjectChange = (newValue) => {
    if (areEqual(video, newValue)) return;
    setVideo(newValue);

    setHasChanged(true);
  };

  const onNestedInputObjectChange = (newValue, video, index, fieldName) => {
    if (areEqual(video, newValue)) return;

    video[fieldName][index] = newValue;

    setVideo(Object.assign({}, video));
    setHasChanged(true);
  };

  const handleAddMovie = (fieldName) => {
    video[fieldName].push(getNewEmptyMovieObject());

    setVideo(Object.assign({}, video));
    setHasChanged(true);
  };

  const accordionChanged = (event, isExpanded) => {
    setIsExpanded(isExpanded);
  };

  const areEqual = (val1, val2) => {
    return JSON.stringify(val1) === JSON.stringify(val2);
  };

  return (
    <Accordion onChange={accordionChanged}>
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
        <Typography className={classes.heading}>
          {video.id}. {video.episodeName}
        </Typography>
      </AccordionSummary>

      <AccordionDetails className={classes.accordionDetails}>
        {isExpanded ? (
          <div className={classes.detailsContainer}>
            <div className={classes.jsonRenderContainer}>
              <pre>{JSON.stringify(video, null, 2)}</pre>
            </div>
            <form className={classes.formContainer}>
              <Card className={classes.card}>
                <Inputs
                  inputObject={video}
                  stringFields={stringFields}
                  stringArrays={stringArrays}
                  inputObjectChanged={(output) => onInputObjectChange(output)}
                ></Inputs>
              </Card>
              {(objectArrays || []).map((fieldName) => (
                <div>
                  {(video[fieldName] || []).map(
                    (movieInfo, singleInputIndex) => (
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
                    )
                  )}
                  <Button
                    size="small"
                    color="primary"
                    onClick={() => handleAddMovie(fieldName)}
                    className={classes.addMovieButton}
                  >
                    Add Movie
                    <AddIcon className={classes.buttonIcon}></AddIcon>
                  </Button>
                </div>
              ))}
            </form>
          </div>
        ) : (
          ""
        )}
      </AccordionDetails>
    </Accordion>
  );
};

export default VideoDetailsModifier;
