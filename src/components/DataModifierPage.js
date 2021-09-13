import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { data } from "data/new-data";
import { Button } from "@material-ui/core";
import VideoDetailsModifier from "./VideoDetailsModifier";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  mainContainer: {},
  button: {
    position: "absolute",
    top: 20,
    left: 10,
  },
}));
const DataModifierPage = () => {
  const initialData = data;
  const [state, setState] = useState(initialData);

  const classes = useStyles();

  useEffect(() => {
    console.log("state = ", state);
  }, [state]);

  const handleChange = (event, datum, index, fieldName) => {
    datum[fieldName] = event;
    const arrayCopy = [...state];
    arrayCopy[index] = datum;
    setState(arrayCopy);
  };

  const handleArrayValueChange = (event, datum, index, fieldName) => {
    const datumUpdated = { ...datum };

    datumUpdated[fieldName] = event;
    const arrayCopy = [...state];
    arrayCopy[index] = datumUpdated;
    setState(arrayCopy);
  };

  const handleAccordionChange = (event, isOpened) => {
    console.log("event", event);
    console.log("isOpened", isOpened);
  };

  const handleDownload = () => {
    const timestamp = new Date().getTime();
    var data = new Blob([JSON.stringify(state)], { type: "text/json" });
    var csvURL = window.URL.createObjectURL(data);
    var tempLink = document.createElement("a");
    tempLink.href = csvURL;
    tempLink.setAttribute("download", `data-${timestamp}.json`);
    tempLink.click();
  };

  return (
    <div className={classes.mainContainer}>
      <Button
        color="primary"
        variant="contained"
        onClick={handleDownload}
        className={classes.button}
      >
        Download File
      </Button>
      {state.map((datum, index) => {
        const datumCopy = JSON.parse(JSON.stringify(datum));
        return (
          <VideoDetailsModifier
            datum={datum}
            index={index}
          ></VideoDetailsModifier>
        );
      })}
    </div>
  );
};

export default DataModifierPage;
