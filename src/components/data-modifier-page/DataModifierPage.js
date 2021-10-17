import React, { useState, useEffect, useRef } from "react";
import makeStyles from "@mui/styles/makeStyles";
import { data, getNewEmptyVideoObject } from "data/new-data";
import { Button, Input } from "@mui/material";
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
  const [videosData, setVideosData] = useState(data);
  let inputFile = useRef(null);

  const classes = useStyles();

  const onVideoSave = (movie, index) => {
    const arrayCopy = [...videosData];
    arrayCopy[index] = movie;
    setVideosData(arrayCopy);
  };

  useEffect(() => {
    console.log("state", videosData.length);
  }, [videosData]);

  const handleAddVideo = () => {
    const arrayCopy = [...videosData];
    const emptyObject = getNewEmptyVideoObject();
    emptyObject.id = arrayCopy.length + 1;
    arrayCopy.push(emptyObject);
    setVideosData(arrayCopy);
  };

  const handleFileSelected = (e) => {
    e.preventDefault();
    const reader = new FileReader();
    reader.onload = async (e) => {
      const text = e.target.result;
      console.table("JSON.parse(text)", JSON.parse(text));

      setVideosData(JSON.parse(text));
    };
    reader.readAsText(e.target.files[0]);
  };

  const handleDownload = () => {
    const timestamp = new Date().getTime();
    var data = new Blob([JSON.stringify(videosData)], { type: "text/json" });
    var csvURL = window.URL.createObjectURL(data);
    var tempLink = document.createElement("a");
    tempLink.href = csvURL;
    tempLink.setAttribute("download", `data-${timestamp}.json`);
    tempLink.click();
  };

  const handleUpload = () => {
    inputFile.current.click();
  };

  return (
    <div className={classes.mainContainer}>
      <div className={classes.buttonsContainer}>
        <Button color="secondary" variant="contained" onClick={handleUpload}>
          Upload File
          <PublishIcon className={classes.buttonIcon}></PublishIcon>
          <input
            onChange={handleFileSelected}
            type="file"
            id="file"
            ref={inputFile}
            style={{ display: "none" }}
          />
        </Button>
        <Button color="primary" variant="contained" onClick={handleDownload}>
          Download File
          <GetAppIcon className={classes.buttonIcon}></GetAppIcon>
        </Button>
      </div>
      <div className={classes.videoModifiers}>
        {videosData.map((datum, index) => {
          return (
            <VideoDetailsModifier
              key={index.toString()}
              datum={JSON.parse(JSON.stringify(datum))}
              index={index}
              onVideoSave={(video) => onVideoSave(video, index)}
              videosData={videosData}
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
