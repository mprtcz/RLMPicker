import { makeStyles } from "@material-ui/core";
import { data } from "data/new-data";
import { searchData } from "functions/searchData";
import React, { useEffect, useState } from "react";
import Filters from "./Filters";
import MatMultiselect from "./MatMultiselect";
import Results from "./Results";
import ItemSelect from "./Select";

const useStyles = makeStyles({
  content: {
    flexDirection: "row",
    flexWrap: "wrap",
    display: "flex",
    justifyContent: "center",
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

  const mapResults = () => {
    return episodesData.filter((episode) => {
      (results || []).includes(episode.id);
    });
  };

  return (
    <div className="mainDiv">
      <div className="header">
        <h2>Don't worry, I'll pick it for you.</h2>
      </div>

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
