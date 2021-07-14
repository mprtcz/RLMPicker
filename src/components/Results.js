import React from "react";

const Results = (props) => {
  const { results } = props;

  const createVideoImageUrl = (url) => {
    const parts = url.split("/");
    const id = parts[parts.length - 1].split("=")[1];
    return `https://img.youtube.com/vi/${id}/0.jpg`;
  };

  /**
   * Shuffles the array as described in https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle#The_modern_algorithm
   */
  const shuffleArray = (array1) => {
    const clone = array1.map((x) => x);
    for (let i = clone.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [clone[i], clone[j]] = [clone[j], clone[i]];
    }
    return clone;
  };

  return (
    <div className="results-grid">
      <div className="main-result"></div>
      {shuffleArray(results).map((datum, i) => (
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
