import React, { useState } from "react";
import { useEffect } from "react";
import MainResult from "./MainResult";
import SingleResult from "./SingleResult";

const Results = (props) => {
  const { results } = props;
  const [chosen, setChosen] = useState();

  useEffect(() => {
    setChosen(results[Math.floor(Math.random() * results.length)]);
  }, [results]);

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
        <div className="main-result">
          <MainResult episode={chosen} />
        </div>
      )}
      <div className="results-grid">
        {shuffleArray(results).map((episode, i) => (
          <SingleResult episode={episode} id={1} />
        ))}
      </div>
    </div>
  );
};

export default Results;
