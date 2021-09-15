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
    width: "80%",
  },
  buttonsContainer: {
    marginBottom: 16,
    marginTop: 16,
    width: "100%",
    display: "flex",
    justifyContent: "space-evenly",
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
    </div>
  );
};

export default DataModifierPage;
