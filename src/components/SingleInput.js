import React, { useState, useEffect } from "react";
import { TextField } from "@mui/material";

const SingleInput = (props) => {
  const [datum, setDatum] = useState(props.datum[props.fieldName]);
  const { emitNewValue, fieldName } = props;

  useEffect(() => {
    setDatum(props.datum[props.fieldName]);
  }, [props]);

  const handleChange = (event) => {
    const trimmedValue = event.target.value.replace(/\n$/, "");
    setDatum(trimmedValue);
    emitNewValue(trimmedValue);
  };

  return (
    <div style={{ flexGrow: 1 }}>
      <TextField
        style={{ width: "100%" }}
        value={datum}
        multiline
        maxRows={3}
        onChange={handleChange}
        label={fieldName}
      />
    </div>
  );
};

export default SingleInput;
