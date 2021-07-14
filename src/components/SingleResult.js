import React from "react";

const SingleResult = (props) => {
  const { episode, key, main } = props;

  const openVideoUrl = (chosenVideo) => {
    window.open(chosenVideo.url, "_blank");
  };

  const createVideoImageUrl = (url) => {
    const parts = url.split("/");
    const id = parts[parts.length - 1].split("=")[1];
    return `https://img.youtube.com/vi/${id}/0.jpg`;
  };

  return (
    <div className={main ? "main-single-result" : "single-result"}>
      <div className={main ? "main-result-cell" : "result-cell"} key={key}>
        {main}
        <img
          onClick={() => openVideoUrl(episode)}
          className={main ? "chosen-video-image" : "video-image"}
          src={createVideoImageUrl(episode.url)}
        ></img>
        <div className="title">{episode.episodeName}</div>
      </div>
    </div>
  );
};

export default SingleResult;
