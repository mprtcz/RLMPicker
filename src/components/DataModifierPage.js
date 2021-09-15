import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { data } from "data/new-data";
import { Button } from "@material-ui/core";
import VideoDetailsModifier from "./VideoDetailsModifier";
import GetAppIcon from "@material-ui/icons/GetApp";
import PublishIcon from "@material-ui/icons/Publish";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  mainContainer: {},
  buttonIcon: {
    marginLeft: 5,
  },
  // TODO make title absolute and buttons flex, it'll look more natural
  buttonUpload: {
    position: "absolute",
    top: 20,
    left: 10,
  },
  buttonDownload: {
    position: "absolute",
    top: 20,
    left: 160,
  },
}));
const DataModifierPage = () => {
  const initialData = data;
  const [state, setState] = useState(initialData);

  const classes = useStyles();

  const onVideoSave = (movie, index) => {
    console.log("event", movie);
    const arrayCopy = [...state];
    arrayCopy[index] = movie;
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
      <Button
        color="secondary"
        variant="contained"
        onClick={handleUpload}
        className={classes.buttonUpload}
      >
        Upload File
        <PublishIcon className={classes.buttonIcon}></PublishIcon>
      </Button>
      <Button
        color="primary"
        variant="contained"
        onClick={handleDownload}
        className={classes.buttonDownload}
      >
        Download File
        <GetAppIcon className={classes.buttonIcon}></GetAppIcon>
      </Button>
      {state.map((datum, index) => {
        const datumCopy = JSON.parse(JSON.stringify(datum));
        return (
          <VideoDetailsModifier
            datum={datum}
            index={index}
            onVideoSave={(video) => onVideoSave(video, index)}
          ></VideoDetailsModifier>
        );
      })}
    </div>
  );
};

export default DataModifierPage;
