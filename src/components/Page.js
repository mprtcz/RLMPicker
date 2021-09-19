import makeStyles from '@mui/styles/makeStyles';
import { data } from "data/new-data";
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
  const episodesData = data;

  const [results, setResults] = useState(episodesData);
  const [resultsEpsodes, setResultsEpsodes] = useState([]);

  useEffect(() => {
    setResultsEpsodes(data.filter((episode) => results.includes(episode)));
  }, [results]);

  return (
    <div className="mainDiv">
      <div className={classes.content}>
        <Filters
          episodesData={episodesData}
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
