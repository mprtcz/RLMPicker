import React from "react";
import Box from "@material-ui/core/Box";
import makeStyles from "@mui/styles/makeStyles";
import ReactGA from "react-ga";
import * as colorsMaterial from "@material-ui/core/colors";
import {
  BarChart,
  Bar,
  AreaChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Area,
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
  const randomColor = (shade) => {
    const colors = Object.keys(colorsMaterial);
    const color = colors[Math.floor(Math.random() * colors.length)];
    return colorsMaterial[color][shade];
  };
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

  const getVideoCountForYear = (getter) => {
    const result = videoData.videos
      .map((videoData) => getter(videoData))
      .flat()
      .reduce((map, word) => {
        if (word in map) {
          map[word]++;
        } else {
          map[word] = 1;
        }
        return map;
      }, {});

    const toReturn = Object.keys(result)
      .map((key) => {
        const name = key;
        const count = result[key];
        return { name, count };
      })
      .sort((a, b) => b.count - a.count);
    console.log("toReturn", toReturn);
    return toReturn;
  };

  const getVideoCountByYear = getVideoCountForYear((video) => {
    return new Date(video.releaseDate).getFullYear();
  }).sort((a, b) => a.name - b.name);

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
                  <h2>{chart.title}</h2>
                  <ResponsiveContainer height={300} width={"99%"}>
                    <BarChart data={chart.data} height={50} width={50}>
                      <Bar dataKey="count" fill={randomColor(300)} />
                      <Tooltip />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Legend />
                    </BarChart>
                  </ResponsiveContainer>
                </Paper>
              );
            })}
            <Paper className={classes.chartPaper}>
              <h2>Videos by year</h2>
              <ResponsiveContainer height={300} width={"99%"}>
                <AreaChart
                  data={getVideoCountByYear}
                  margin={{
                    top: 10,
                    right: 30,
                    left: 0,
                    bottom: 0,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Area
                    type="monotone"
                    dataKey="count"
                    stroke={randomColor(300)}
                    fill={randomColor(300)}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </Paper>
          </Box>
        </span>
      )}
    </VideoDataContext.Consumer>
  );
};

export default AnalysisPage;
