import React, { useState } from "react";
import { useEffect } from "react";

const Results = (props) => {
  const { results } = props;
  const [chosen, setChosen] = useState();

  useEffect(() => {
    setChosen(results[Math.floor(Math.random() * results.length)]);
  }, [results]);

  const createVideoImageUrl = (url) => {
    const parts = url.split("/");
    const id = parts[parts.length - 1].split("=")[1];
    return `https://img.youtube.com/vi/${id}/0.jpg`;
  };

  /**
   * Shuffles the array as described in https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle#The_modern_algorithm
   */
  const shuffleArray = (array) => {
    const clone = array.map((x) => x);
    for (let i = clone.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [clone[i], clone[j]] = [clone[j], clone[i]];
    }
    return clone;
  };

  return (
    <div className="all-results">
      {chosen && (
        <div className="main-result" style={{ width: "85%" }}>
          <img
            className="chosen-video-image"
            src={createVideoImageUrl(chosen.url)}
          ></img>
          <div className="title">
            <h2>{chosen.episodeName}</h2>
          </div>
        </div>
      )}
      <div className="results-grid">
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
    </div>
  );
};

export default Results;
