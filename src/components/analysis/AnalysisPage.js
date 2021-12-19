import React from "react";
import Paper from "@material-ui/core/Paper";
import {
  Chart,
  Legend,
  PieSeries,
  Title,
  Tooltip,
} from "@devexpress/dx-react-chart-material-ui";
import { HoverState, EventTracker } from "@devexpress/dx-react-chart";
import { useVideoData, VideoDataContext } from "contexts/VideosDataContext";

const AnalysisPage = () => {
  const videoData = useVideoData();

  const getPieChartData = () => {
    const result = videoData.videos
      .map((videoData) => videoData.members)
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
    <div>
      <VideoDataContext.Consumer>
        {() => (
          <span>
            <Paper>
              <Chart data={getPieChartData()}>
                <Title text="Member appearance by count" />
                <PieSeries
                  valueField="count"
                  argumentField="name"
                  name="name"
                />
                <Legend />
                <EventTracker />
                <HoverState />
                <Tooltip />
              </Chart>
            </Paper>
          </span>
        )}
      </VideoDataContext.Consumer>
    </div>
  );
};

export default AnalysisPage;
