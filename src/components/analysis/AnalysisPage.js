import React from "react";
import Box from "@material-ui/core/Box";
import makeStyles from "@mui/styles/makeStyles";
import ReactGA from "react-ga";
import { Animation } from "@devexpress/dx-react-chart";

import {
  Chart,
  BarSeries,
  ArgumentAxis,
  ValueAxis,
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
    flexDirection: "column",
    "& >*": {},
  },
}));
const AnalysisPage = () => {
  ReactGA.pageview("/analysis");
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

  const charts = [
    {
      title: "Member appearance by count",
      data: getFieldByAppearanceData("members"),
    },
    {
      title: "Guest appearance by count",
      data: getFieldByAppearanceData("guests"),
    },
  ];

  return (
    <VideoDataContext.Consumer>
      {() => (
        <span>
          <Box className={classes.container}>
            {charts.map((chart, index) => {
              return (
                <Chart data={chart.data}>
                  <Title text={chart.title} />
                  <ArgumentAxis />
                  <ValueAxis />
                  <BarSeries valueField="count" argumentField="name" />
                  <Animation />
                  <EventTracker />
                  <HoverState />
                  <Tooltip />
                </Chart>
              );
            })}
          </Box>
        </span>
      )}
    </VideoDataContext.Consumer>
  );
};

export default AnalysisPage;
