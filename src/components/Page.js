import { data } from "data/new-data";
import { searchData } from "functions/searchData";
import React, { useEffect, useState } from "react";
import MultiselectFilter from "./MultiselectFilter";
import Results from "./Results";
import ItemSelect from "./Select";

const Page = () => {
  const episodesData = data;

  const [results, setResults] = useState([]);
  const [filters, setFilters] = useState([]);

  useEffect(() => {
    console.log("results", results);
  }, [results]);

  useEffect(
    (filter) => {
      const searchResults = searchData(episodesData, filters);
      setResults(searchResults);
    },
    [filters]
  );

  const handleFiltering = (filter) => {
    const filtersWithCurrentRemoved = filters.filter(
      (f) => f.type !== filter.type
    );
    filtersWithCurrentRemoved.push(filter);

    setFilters(filtersWithCurrentRemoved);
  };

  return (
    <div className="mainDiv">
      <div className="header">
        <h2>Hello, sir.</h2>
      </div>

      <div className="content">
        <div className="results">
          results go here
          <Results results={results} />
        </div>
        <div className="fitlers">
          <MultiselectFilter
            data={episodesData}
            filterType="titles"
            onSelect={(e) => handleFiltering(e)}
          />
          <ItemSelect items={episodesData} onSelect={(e) => setResults(e)} />
          <MultiselectFilter
            data={episodesData}
            filterType="members"
            onSelect={(e) => handleFiltering(e)}
          />
        </div>
      </div>
    </div>
  );
};

export default Page;
// Will be useful
//https://stackoverflow.com/questions/2068344/how-do-i-get-a-youtube-video-thumbnail-from-the-youtube-api
