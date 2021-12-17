import React, { useState, useEffect } from "react";
import makeStyles from "@mui/styles/makeStyles";
import SingleInput from "components/SingleInput";
import MultiselectWithDataAdd from "components/MultiselectWithDataAdd";
import DateInput from "./DateInput";
import { VideoDataContext } from "contexts/VideosDataContext";
import { createVideoImageUrl } from "functions/createVideoImageUrl";
import { Alert, Button, Snackbar } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },

  inputs: {
    width: "100%",
    "& >*": {
      marginBottom: 8,
    },
  },
  inputHorizontal: {
    display: "flex",
    flexDirection: "row",
  },
  singleInput: {
    flexGrow: 1,
  },
}));

const Inputs = (props) => {
  const classes = useStyles();
  const {
    inputObject,
    stringFields,
    stringArrays,
    inputObjectChanged,
    dateFieldName,
    postProcesses,
  } = props;
  const [object, setObject] = useState(inputObject);
  const [open, setOpen] = React.useState(false);

  const handleChange = (newValue, datum, fieldName) => {
    if (postProcesses && postProcesses.has(fieldName)) {
      newValue = postProcesses.get(fieldName)(newValue);
    }
    if (areEqual(datum[fieldName], newValue)) return;
    datum[fieldName] = newValue;
    setObject(Object.assign({}, datum));

    inputObjectChanged(object);
  };

  const areEqual = (val1, val2) => {
    return JSON.stringify(val1) === JSON.stringify(val2);
  };

  const handleProcessTitles = (title, datum, fieldName) => {
    console.log("title", title);
    // split the title with colon
    const titleArray = title.split(":");
    if (titleArray.length < 2) {
      setOpen(true);
      return;
    }

    const titles = titleArray[1]
      .split(/,| and /)
      .filter((title) => title)
      .map((title) => title.trim())
      .map((title) => {
        return {
          title,
        };
      });

    datum[fieldName] = titles;
    setObject(Object.assign({}, datum));
    inputObjectChanged(object);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  return (
    <div className={classes.inputs}>
      {(stringFields || []).map((fieldName, singleInputIndex) => (
        <div className={classes.inputHorizontal}>
          <SingleInput
            key={singleInputIndex}
            datum={object}
            fieldName={fieldName}
            emitNewValue={(newValue) => {
              handleChange(newValue, object, fieldName);
            }}
          ></SingleInput>
          {fieldName === "url" && object[fieldName] ? (
            <img
              alt=""
              className={"video-image-small"}
              src={createVideoImageUrl(object[fieldName])}
            ></img>
          ) : (
            ""
          )}
          {fieldName === "episodeName" && object[fieldName] ? (
            <Button
              size="small"
              color="primary"
              onClick={() =>
                handleProcessTitles(object[fieldName], object, "moviesData")
              }
            >
              (R)
            </Button>
          ) : (
            ""
          )}
        </div>
      ))}
      {dateFieldName ? (
        <DateInput
          datum={object}
          fieldName={dateFieldName}
          emitNewValue={(newValue) => {
            handleChange(newValue, object, dateFieldName);
          }}
        ></DateInput>
      ) : (
        ""
      )}
      <VideoDataContext.Consumer>
        {(contextValue) => (
          <span>
            {(stringArrays || []).map((arrayName, index) => (
              <MultiselectWithDataAdd
                array={object[arrayName]}
                title={arrayName}
                videosData={contextValue.videos}
                key={index}
                emitValuesChange={(newValue) => {
                  handleChange(newValue, object, arrayName);
                }}
              ></MultiselectWithDataAdd>
            ))}
          </span>
        )}
      </VideoDataContext.Consumer>
      <Snackbar open={open} autoHideDuration={5000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
          Can't resolve titties!
        </Alert>
      </Snackbar>
    </div>
  );
};

export default Inputs;
