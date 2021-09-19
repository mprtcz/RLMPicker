import React, { useState } from "react";
import makeStyles from "@mui/styles/makeStyles";
import { data, getNewEmptyVideoObject } from "data/new-data";
import { Button } from "@mui/material";
import VideoDetailsModifier from "./VideoDetailsModifier";
import GetAppIcon from "@mui/icons-material/GetApp";
import PublishIcon from "@mui/icons-material/Publish";
import AddIcon from "@mui/icons-material/Add";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    display: "flex",
  },
  mainContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "inherit",
  },
  buttonIcon: {
    marginLeft: 5,
  },
  videoModifiers: {
    width: "95%",
  },
  buttonsContainer: {
    marginBottom: 16,
    marginTop: 16,
    width: "100%",
    display: "flex",
    justifyContent: "space-evenly",
  },
  addVideoButton: {
    marginBottom: 16,
    marginTop: 16,
    padding: "8px",
    boxShadow: "0 1px 2px rgba(0,0,0,0.24)",
  },
}));
const DataModifierPage = () => {
  const initialData = data;
  const [state, setState] = useState(initialData);

  const classes = useStyles();

  const onVideoSave = (movie, index) => {
    const arrayCopy = [...state];
    arrayCopy[index] = movie;
    setState(arrayCopy);
  };

  const handleAddVideo = () => {
    const arrayCopy = [...state];
    const emptyObject = getNewEmptyVideoObject();
    emptyObject.id = arrayCopy.length + 1;
    arrayCopy.push(emptyObject);
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

  const handleUpload = () => {};

  return (
    <div className={classes.mainContainer}>
      <div className={classes.buttonsContainer}>
        <Button color="secondary" variant="contained" onClick={handleUpload}>
          Upload File
          <PublishIcon className={classes.buttonIcon}></PublishIcon>
        </Button>
        <Button color="primary" variant="contained" onClick={handleDownload}>
          Download File
          <GetAppIcon className={classes.buttonIcon}></GetAppIcon>
        </Button>
      </div>
      <div className={classes.videoModifiers}>
        {state.map((datum, index) => {
          return (
            <VideoDetailsModifier
              datum={JSON.parse(JSON.stringify(datum))}
              index={index}
              onVideoSave={(video) => onVideoSave(video, index)}
            ></VideoDetailsModifier>
          );
        })}
      </div>
      <Button
        size="small"
        color="primary"
        onClick={handleAddVideo}
        className={classes.addVideoButton}
      >
        Add Video
        <AddIcon className={classes.buttonIcon}></AddIcon>
      </Button>
    </div>
  );
};

export default DataModifierPage;
