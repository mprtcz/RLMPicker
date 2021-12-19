import React from "react";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import makeStyles from "@mui/styles/makeStyles";

import {
  Chart,
  Legend,
  PieSeries,
  Title,
  Tooltip,
} from "@devexpress/dx-react-chart-material-ui";
import { HoverState, EventTracker } from "@devexpress/dx-react-chart";
import { useVideoData, VideoDataContext } from "contexts/VideosDataContext";

const useStyles = makeStyles((theme) => ({
  container: {
    height: "100%",
    width: "100%",
    display: "flex",
    "& >*": {
      width: "50%",
      maxHeight: "300px",
    },
  },
}));
const AnalysisPage = () => {
  const classes = useStyles();
  const videoData = useVideoData();

  const getFieldByAppearanceData = (field) => {
    const result = videoData.videos
      .map((videoData) => videoData[field])
      .flat()
      .reduce((map, word) => {
        if (word in map) {
          map[word]++;
        } else {
          map[word] = 1;
        }
        return map;
      }, {});

    return Object.keys(result)
      .map((key) => {
        const name = key;
        const count = result[key];
        return { name, count };
      })
      .sort((a, b) => b.count - a.count);
  };

  const getGuestsByAppearanceData = () => {
    const result = videoData.videos
      .map((videoData) => videoData.guests)
      .flat()
      .reduce((map, word) => {
        if (word in map) {
          map[word]++;
        } else {
          map[word] = 1;
        }
        return map;
      }, {});

    return Object.keys(result)
      .map((key) => {
        const name = key;
        const count = result[key];
        return { name, count };
      })
      .sort((a, b) => b.count - a.count);
  };

  return (
    <VideoDataContext.Consumer>
      {() => (
        <span>
          <Box className={classes.container}>
            <Chart data={getFieldByAppearanceData("members")}>
              <Title text="Member appearance by count" />
              <PieSeries valueField="count" argumentField="name" name="name" />
              <Legend />
              <EventTracker />
              <HoverState />
              <Tooltip />
            </Chart>
            <Chart data={getFieldByAppearanceData("guests")}>
              <Title text="Guest appearance by count" />
              <PieSeries valueField="count" argumentField="name" name="name" />
              <Legend />
              <EventTracker />
              <HoverState />
              <Tooltip />
            </Chart>
          </Box>
        </span>
      )}
    </VideoDataContext.Consumer>
  );
};

export default AnalysisPage;
