import makeStyles from "@mui/styles/makeStyles";
import { useVideoData } from "contexts/VideosDataContext";
import React, { useEffect, useState } from "react";
import Filters from "./Filters";
import Results from "./Results";

const useStyles = makeStyles({
  content: {
    flexDirection: "row",
    flexWrap: "wrap",
    display: "flex",
    justifyContent: "center",
    paddingTop: 8,
  },
  results: {
    margin: 5,
  },
  filterContainer: {
    display: "flex",
    flexDirection: "row",
  },
});

const Page = () => {
  const classes = useStyles();

  const videoData = useVideoData();

  const [results, setResults] = useState(videoData.videos);
  const [resultsEpsodes, setResultsEpsodes] = useState([]);

  useEffect(() => {
    setResultsEpsodes(
      videoData.videos.filter((episode) => results.includes(episode))
    );
  }, [results]);

  return (
    <div className="mainDiv">
      <div className={classes.content}>
        <Filters
          episodesData={videoData.videos}
          onSelect={(e) => setResults(e)}
        ></Filters>
        <div className={classes.results}>
          <Results results={resultsEpsodes} />
        </div>
      </div>
    </div>
  );
};

export default Page;
// Will be useful
//https://stackoverflow.com/questions/2068344/how-do-i-get-a-youtube-video-thumbnail-from-the-youtube-api
