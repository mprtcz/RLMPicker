import React from "react";

const Results = (props) => {
  const { results } = props;

  return (
    <div>
      {results &&
        results.map((result) => {
          <div className="result">
            <div className="title">{result.title}</div>
          </div>;
        })}
    </div>
  );
};

export default Results;
