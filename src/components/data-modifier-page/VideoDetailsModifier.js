import React, { useState, useEffect } from "react";
import makeStyles from "@mui/styles/makeStyles";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Button } from "@mui/material";
import * as colorsMaterial from "@material-ui/core/colors";
import CircularProgress from "@mui/material/CircularProgress";

import AddIcon from "@mui/icons-material/Add";
import {
  Accordion,
  Card,
  Box,
  AccordionDetails,
  AccordionSummary,
  Typography,
  Paper,
} from "@mui/material";
import Inputs from "./Inputs";
import { getNewEmptyMovieObject } from "data/new-data";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  accordionDetails: {},
  formContainer: {
    display: "flex",
    flexDirection: "row",
  },
  card: {
    padding: "8px",
  },
  jsonRenderContainer: {
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
  const stringArrays = ["members", "guests", "editors", "subseries"];
  const objectArrays = ["moviesData"];
  const movieInfoStringFields = ["title", "year", "technology", "studio"];
  const fieldNameToPostProcess = new Map([
    ["url", (input) => input.split("&list=")[0]],
  ]);

  const {
    datum,
    onVideoSave,
    deleteVideo,
    index,
    activeIndexChanged,
    activeIndex,
  } = props;
  const classes = useStyles();

  const [video, setVideo] = useState(datum);
  const [hasChanged, setHasChanged] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [progress, setProgress] = useState(0);
  const [expandedMovieIndex, setExpandedMovieIndex] = useState(-1);

  useEffect(() => {
    if (props.datum !== video) {
      setVideo(props.datum);
    }
  }, [props.datum]);

  useEffect(() => {
    setProgress(calculateProgress(video));
  }, [video]);

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
    activeIndexChanged(index, isExpanded);
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
      if ((video[fieldName] || {}).length > 0) {
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

  const getColor = (progress, shade) => {
    let color = colorsMaterial["grey"][shade];
    if (progress < 60) return colorsMaterial["red"][shade];
    if (progress >= 60 && progress < 85) return colorsMaterial["amber"][shade];
    if (progress >= 85) return colorsMaterial["lightGreen"][shade];
    return color;
  };

  return (
    <Accordion
      expanded={activeIndex === index && isExpanded}
      onChange={accordionChanged}
    >
      <AccordionSummary
        className={classes.accordionSummary}
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Box sx={{ position: "relative", display: "inline-flex" }}>
          <CircularProgress
            variant="determinate"
            {...{ value: progress }}
            style={{ color: getColor(progress, 400) }}
          />
          <Box
            sx={{
              top: 4,
              left: 3,
              bottom: 0,
              right: 0,
              position: "absolute",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography
              variant="caption"
              component="div"
              color="text.secondary"
            >
              {`${Math.round(progress)}%`}
            </Typography>
          </Box>
        </Box>
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
          {index + 1}. {video.episodeName}
        </Typography>
        <Button onClick={(event) => handleDelete(event)} color="error">
          DELETE
        </Button>
      </AccordionSummary>

      <AccordionDetails className={classes.accordionDetails}>
        {isExpanded ? (
          <Paper
            className={classes.detailsContainer}
            sx={{
              flexDirection: { xl: "row", xs: "column" },
            }}
          >
            <Box
              className={classes.jsonRenderContainer}
              sx={{
                width: { xs: "100%", xl: "35%" },
              }}
            >
              <pre>{JSON.stringify(video, null, 2)}</pre>
            </Box>
            <form style={{ width: "100%" }}>
              <Box
                className={classes.formContainer}
                sx={{
                  display: "flex",
                  width: {
                    xs: "100%",
                  },
                  flexDirection: {
                    xl: "row",
                    xs: "column",
                  },
                }}
              >
                <Box
                  style={{ marginTop: "6px" }}
                  sx={{
                    width: {
                      xs: "100%",
                      xl: "60%",
                    },
                    marginRight: {
                      xs: "0px",
                      xl: "2%",
                    },
                  }}
                >
                  <Inputs
                    inputObject={video}
                    stringFields={stringFields}
                    stringArrays={stringArrays}
                    dateFieldName={dateFieldName}
                    postProcesses={fieldNameToPostProcess}
                    inputObjectChanged={(output) => onInputObjectChange(output)}
                  ></Inputs>{" "}
                </Box>
                <Box
                  sx={{
                    width: {
                      xs: "100%",
                      xl: "40%",
                    },
                  }}
                >
                  {(objectArrays || []).map((fieldName, index) => (
                    <div key={index} style={{ width: "100%" }}>
                      {(video[fieldName] || []).map(
                        (movieInfo, singleInputIndex) => (
                          <Accordion
                            key={singleInputIndex}
                            expanded={expandedMovieIndex === singleInputIndex}
                            onChange={() =>
                              setExpandedMovieIndex(singleInputIndex)
                            }
                          >
                            <AccordionSummary
                              expandIcon={<ExpandMoreIcon />}
                              aria-controls="panel1a-content"
                              id="panel1a-header"
                            >
                              <Typography>
                                {singleInputIndex + 1}. {movieInfo.title}
                              </Typography>
                            </AccordionSummary>
                            <AccordionDetails
                              className={classes.accordionDetails}
                            >
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
                </Box>
              </Box>
            </form>
          </Paper>
        ) : (
          ""
        )}
      </AccordionDetails>
    </Accordion>
  );
};

export default VideoDetailsModifier;
