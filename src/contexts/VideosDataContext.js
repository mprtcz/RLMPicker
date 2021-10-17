import { data } from "data/new-data";
import React, { createContext, useContext, useState } from "react";
export const VideoDataContext = createContext({
  videos: data,
  setVideosData: (v) => {},
});

const { Provider } = VideoDataContext;

export const VideoDataProvider = ({ children }) => {
  const [videos, setVideos] = useState(data);
  const setVideosData = (videos) => setVideos([...videos]);
  return <Provider value={{ videos, setVideosData }}>{children}</Provider>;
};

export const useVideoData = () => useContext(VideoDataContext);
