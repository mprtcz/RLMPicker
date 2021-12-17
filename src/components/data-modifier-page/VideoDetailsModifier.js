import React, { useState, useEffect } from "react";
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
    width: "35%",
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
  title: {
    alignSelf: "center",
    textAlign: "left",
    paddingLeft: 8,
    flexGrow: 1,
  },
  buttonIcon: {},
  addMovieButton: {
    margin: 8,
  },
  accordionSummary: {
    flexDirection: "row-reverse",
  },
  progress: {
    color: "green",
  },
}));
const VideoDetailsModifier = (props) => {
  const notMandatoryFields = ["guests", "subtitle"];
  const stringFields = ["episodeName", "url", "subtitle", "description"];
  const dateFieldName = "releaseDate";
  const stringArrays = ["members", "guests", "editors"];
  const objectArrays = ["moviesData"];
  const movieInfoStringFields = ["title", "year", "technology", "studio"];
  const fieldNameToPostProcess = new Map([
    ["url", (input) => input.split("&list=")[0]],
  ]);

  const { datum, onVideoSave, deleteVideo, index } = props;
  const classes = useStyles();

  const [video, setVideo] = useState(datum);
  const [hasChanged, setHasChanged] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    if (props.datum !== video) {
      setVideo(props.datum);
    }
  }, [props.datum]);

  const handleSave = (event) => {
    event.preventDefault();
    event.stopPropagation();

    onVideoSave(video);

    setHasChanged(false);
  };

  const onInputObjectChange = (newValue) => {
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

  const handleDelete = (event) => {
    event.stopPropagation();
    deleteVideo();
  };

  const handleMovieDelete = (event, moviesArray, index, fieldName) => {
    event.stopPropagation();
    const arrayCopy = [...moviesArray];
    arrayCopy.splice(index, 1);
    video[fieldName] = arrayCopy;
    setVideo(Object.assign({}, video));
  };

  const calculateProgressForFields = (fields, counter) => {
    for (let fieldName of fields.filter(
      (fieldName) => !notMandatoryFields.includes(fieldName)
    )) {
      counter.total++;
      if (video[fieldName].length > 0) {
        counter.result++;
      }
    }
  };

  const calculateProgress = (video) => {
    const counter = {
      total: 0,
      result: 0,
    };

    calculateProgressForFields(stringFields, counter);
    calculateProgressForFields(stringArrays, counter);
    calculateProgressForFields(objectArrays, counter);

    if (video[dateFieldName]) {
      counter.total++;
      if (video[dateFieldName] !== 0) {
        counter.result++;
      }
    }

    return Math.round((counter.result * 100) / counter.total);
  };

  return (
    <Accordion onChange={accordionChanged}>
      <AccordionSummary
        className={classes.accordionSummary}
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
        <Typography className={classes.title}>
          {index + 1}. {video.episodeName} [{calculateProgress(video)}%]
        </Typography>
        <Button onClick={(event) => handleDelete(event)} color="error">
          DELETE
        </Button>
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
                  dateFieldName={dateFieldName}
                  postProcesses={fieldNameToPostProcess}
                  inputObjectChanged={(output) => onInputObjectChange(output)}
                ></Inputs>
              </Card>
              {(objectArrays || []).map((fieldName, index) => (
                <div key={index}>
                  {(video[fieldName] || []).map(
                    (movieInfo, singleInputIndex) => (
                      <Accordion key={singleInputIndex}>
                        <AccordionSummary
                          expandIcon={<ExpandMoreIcon />}
                          aria-controls="panel1a-content"
                          id="panel1a-header"
                        >
                          <Typography>
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
                          <Button
                            onClick={(event) =>
                              handleMovieDelete(
                                event,
                                video[fieldName],
                                singleInputIndex,
                                fieldName
                              )
                            }
                            color="error"
                          >
                            DELETE
                          </Button>
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
