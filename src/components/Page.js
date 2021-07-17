import { makeStyles } from "@material-ui/core";
import { data } from "data/new-data";
import { searchData } from "functions/searchData";
import React, { useEffect, useState } from "react";
import MatMultiselect from "./MatMultiselect";
import Results from "./Results";
import ItemSelect from "./Select";

const useStyles = makeStyles({
  content: {
    flexDirection: "row",
    flexWrap: "wrap-reverse",
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

  // Results holding data only about ids of videos matching filters.
  const [results, setResults] = useState(
    episodesData.map((episode) => episode.id)
  );
  const [resultsEpsodes, setResultsEpsodes] = useState([]);

  useEffect(() => {
    console.log("results", results);
    setResultsEpsodes(data.filter((episode) => results.includes(episode.id)));
  }, [results]);

  const mapResults = () => {
    return episodesData.filter((episode) => {
      (results || []).includes(episode.id);
    });
  };

  return (
    <div className="mainDiv">
      <div className="header">
        <h2>Don't worry, I'll pick it up for you.</h2>
      </div>

      <div className={classes.content}>
        <div className={classes.results}>
          <div className="filters-container">
            <MatMultiselect
              data={episodesData}
              filterType="members"
              onSelect={(e) => setResults(e)}
            />
            <ItemSelect items={episodesData} onSelect={(e) => setResults(e)} />
          </div>
          <Results results={resultsEpsodes} />
        </div>
      </div>
    </div>
  );
};

export default Page;
// Will be useful
//https://stackoverflow.com/questions/2068344/how-do-i-get-a-youtube-video-thumbnail-from-the-youtube-api
