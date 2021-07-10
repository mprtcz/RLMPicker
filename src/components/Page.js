import { data } from "data/data";
import React from "react";
import MultiselectFilter from "./MultiselectFilter";

const Page = () => {
  const episodesData = data;
  console.log("data", data);

  return (
    <div className="mainDiv">
      <div className="header">
        <h2>Hello, sir.</h2>
      </div>
      <div className="content">
        <div className="results">results go here</div>
        <div className="fitlers">
          <MultiselectFilter data={episodesData} filterType="titles" />
          <MultiselectFilter data={episodesData} filterType="members" />
        </div>
      </div>
    </div>
  );
};

export default Page;
// Will be useful
//https://stackoverflow.com/questions/2068344/how-do-i-get-a-youtube-video-thumbnail-from-the-youtube-api
