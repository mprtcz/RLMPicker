import { createVideoImageUrl } from "functions/createVideoImageUrl";
import React from "react";

const SingleResult = (props) => {
  const { episode } = props;

  const openVideoUrl = (chosenVideo) => {
    window.open(chosenVideo.url, "_blank");
  };

  return (
    <div className={"single-result"}>
      <div className={"result-cell"}>
        <img
          alt=""
          onClick={() => openVideoUrl(episode)}
          className={"video-image"}
          src={createVideoImageUrl(episode.url)}
        ></img>
        <div className="title">{episode.episodeName}</div>
      </div>
    </div>
  );
};

export default SingleResult;
