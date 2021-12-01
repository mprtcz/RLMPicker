import React, { useState, useEffect } from "react";
import makeStyles from "@mui/styles/makeStyles";
import SingleInput from "components/SingleInput";
import MultiselectWithDataAdd from "components/MultiselectWithDataAdd";
import DateInput from "./DateInput";
import { VideoDataContext } from "contexts/VideosDataContext";
import { createVideoImageUrl } from "functions/createVideoImageUrl";

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
    </div>
  );
};

export default Inputs;
