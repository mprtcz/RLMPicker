import React, { useState, useEffect } from "react";
import makeStyles from "@mui/styles/makeStyles";

import SingleInput from "components/SingleInput";
import MultiselectWithDataAdd from "components/MultiselectWithDataAdd";
import DateInput from "./DateInput";

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
}));

const Inputs = (props) => {
  const classes = useStyles();
  const {
    inputObject,
    stringFields,
    stringArrays,
    inputObjectChanged,
    dateFieldName,
    videosData,
  } = props;
  const [object, setObject] = useState(inputObject);
  // TODO make it more generic

  const handleChange = (newValue, datum, fieldName) => {
    if (areEqual()) datum[fieldName] = newValue;
    setObject(Object.assign({}, datum));

    inputObjectChanged(object);
  };

  useEffect(() => {
    console.log("Inputs state", videosData);
  }, [videosData]);

  const areEqual = (val1, val2) => {
    return JSON.stringify(val1) === JSON.stringify(val2);
  };

  return (
    <div className={classes.inputs}>
      {(stringFields || []).map((fieldName, singleInputIndex) => (
        <SingleInput
          key={singleInputIndex}
          datum={object}
          fieldName={fieldName}
          emitNewValue={(newValue) => {
            handleChange(newValue, object, fieldName);
          }}
        ></SingleInput>
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
      {(stringArrays || []).map((arrayName, index) => (
        <MultiselectWithDataAdd
          array={object[arrayName]}
          title={arrayName}
          videosData={videosData}
          key={index}
          emitValuesChange={(newValue) => {
            handleChange(newValue, object, arrayName);
          }}
        ></MultiselectWithDataAdd>
      ))}
    </div>
  );
};

export default Inputs;
