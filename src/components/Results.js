import React from "react";

const Results = (props) => {
  const { results } = props;

  return (
    <div>
      Content:
      {results.map((datum, i) => (
        <div className="result" key={i}>
          <div className="title">{datum.episodeName}</div>
        </div>
      ))}
    </div>
  );
};

export default Results;
