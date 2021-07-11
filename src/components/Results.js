import React from "react";

const Results = (props) => {
  const { results } = props;

  const createVideoImageUrl = (url) => {
    const parts = url.split("/");
    const id = parts[parts.length - 1].split("=")[1];
    return `https://img.youtube.com/vi/${id}/0.jpg`;
  };

  return (
    <div className="results-grid">
      {results.map((datum, i) => (
        <div className="result-cell" key={i}>
          <img
            className="video-image"
            src={createVideoImageUrl(datum.url)}
          ></img>
          <div className="title">{datum.episodeName}</div>
        </div>
      ))}
    </div>
  );
};

export default Results;
