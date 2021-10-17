import React, { useRef } from "react";
import makeStyles from "@mui/styles/makeStyles";
import { getNewEmptyVideoObject } from "data/new-data";
import { Button } from "@mui/material";
import VideoDetailsModifier from "./VideoDetailsModifier";
import GetAppIcon from "@mui/icons-material/GetApp";
import PublishIcon from "@mui/icons-material/Publish";
import AddIcon from "@mui/icons-material/Add";
import { useVideoData, VideoDataContext } from "contexts/VideosDataContext";

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
    padding: 12,
    boxShadow: "0 1px 2px rgba(0,0,0,0.34)",
  },
}));
const DataModifierPage = () => {
  const videoData = useVideoData();
  let inputFile = useRef(null);

  const classes = useStyles();

  const onVideoSave = (movie, index) => {
    const arrayCopy = [...videoData.videos];
    arrayCopy[index] = movie;
    videoData.setVideosData(arrayCopy);
  };

  const handleAddVideo = () => {
    const arrayCopy = [...videoData.videos];
    const emptyObject = getNewEmptyVideoObject();
    emptyObject.id = arrayCopy.length + 1;
    arrayCopy.push(emptyObject);
    videoData.setVideosData(arrayCopy);
  };

  const handleFileSelected = (e) => {
    e.preventDefault();
    const reader = new FileReader();
    reader.onload = async (e) => {
      // @ts-ignore
      videoData.setVideosData([...JSON.parse(e.target.result)]);
    };
    reader.readAsText(e.target.files[0]);
  };

  const handleDownload = () => {
    const timestamp = new Date().getTime();
    var data = new Blob([JSON.stringify(videoData.videos)], {
      type: "text/json",
    });
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
      <VideoDataContext.Consumer>
        {(contextValue) => (
          <div className={classes.videoModifiers}>
            {(contextValue.videos || []).map((datum, index) => {
              return (
                <VideoDetailsModifier
                  key={index.toString()}
                  datum={JSON.parse(JSON.stringify(datum))}
                  index={index}
                  onVideoSave={(video) => onVideoSave(video, index)}
                  videosData={videoData.videos}
                ></VideoDetailsModifier>
              );
            })}
          </div>
        )}
      </VideoDataContext.Consumer>
      <Button
        style={{ margin: "16px", padding: "8px" }}
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
