import React from "react";
import { Button } from "@mui/material";
import makeStyles from "@mui/styles/makeStyles";
import { Card } from "@mui/material";

const useStyles = makeStyles({
  root: {
    display: "flex",
  },
  card: { overflow: "initial" },
  container: {
    display: "flex",
    overflow: "auto",
  },
  videoContainer: {
    display: "flex",
    flexDirection: "column",
    minWidth: "250px",
    justifyContent: "space-between",
    marginRight: 2,
    padding: 5,
  },
});
const VideosList = (props) => {
  const { videos } = props;

  const classes = useStyles();

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div className={classes.container}>
      {videos.map((episode) => {
        return (
          <Card className={classes.videoContainer}>
            <div>
              <p>{episode.id}</p>
              <p>
                {episode.releaseDate ? formatDate(episode.releaseDate) : ""}
              </p>
              <p>{episode.episodeName || ""}</p>
            </div>
            <Button color="primary" variant="contained">
              Edit
            </Button>
          </Card>
        );
      })}
    </div>
  );
};

export default VideosList;
