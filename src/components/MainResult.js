import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import makeStyles from "@mui/styles/makeStyles";
import { createVideoImageUrl } from "functions/createVideoImageUrl";
import React, { useState } from "react";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
  },
  media: {
    height: 360,
    width: "100%",
    objectFit: "cover",
  },
  card: {
    maxWidth: 480,

    boxShadow: "9px 8px 4px rgb(104 97 97 / 10%)",
  },
  details: {
    marginLeft: 15,
    marginTop: 15,
    maxWidth: 480,
  },
  detail: {
    textAlign: "left",
  },
});

const MainResult = (props) => {
  const { episode } = props;

  const [showDetails, setShowDetails] = useState(false);

  const classes = useStyles();

  const openVideoUrl = (chosenVideo) => {
    window.open(chosenVideo.url, "_blank");
  };

  const handleShowDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className={classes.root}>
      <Card className={classes.card}>
        <CardActionArea onClick={() => openVideoUrl(episode)}>
          <CardMedia
            className={classes.media}
            image={createVideoImageUrl(episode.url)}
            title="botw-image"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {episode.episodeName}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {episode.description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Another!
          </Button>
          <Button size="small" color="primary" onClick={handleShowDetails}>
            {showDetails ? "Hide details" : "Learn More"}
          </Button>
        </CardActions>
      </Card>
      {showDetails ? (
        <Typography variant="body2" color="textSecondary" component="p">
          <div className={classes.details}>
            <div className={classes.detail}>Editors: {episode.editors}</div>
            <div className={classes.detail}>
              Released: {new Date(episode.releaseDate).toLocaleDateString()}
            </div>
            <div className={classes.detail}>
              Movies:{" "}
              {episode.moviesData
                .map((movie) => `${movie.title} (${movie.year})`)
                .join(", ")}
            </div>
          </div>
        </Typography>
      ) : (
        ""
      )}
    </div>
  );
};

export default MainResult;
