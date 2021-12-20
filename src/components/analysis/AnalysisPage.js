import React from "react";
import Box from "@material-ui/core/Box";
import makeStyles from "@mui/styles/makeStyles";
import ReactGA from "react-ga";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

import { useVideoData, VideoDataContext } from "contexts/VideosDataContext";
import { Paper } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  container: {
    height: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    "& >*": {},
  },
  chartPaper: {
    width: "95%",
    height: "100%",
    margin: "5px",
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
                <Paper key={index} className={classes.chartPaper}>
                  <ResponsiveContainer height={300} width={"99%"}>
                    <BarChart data={chart.data} height={50} width={50}>
                      <Bar dataKey="count" fill="#8884d8" />
                      <Tooltip />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Legend />
                    </BarChart>
                  </ResponsiveContainer>
                </Paper>
              );
            })}
          </Box>
        </span>
      )}
    </VideoDataContext.Consumer>
  );
};

export default AnalysisPage;
