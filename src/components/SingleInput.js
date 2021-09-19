import React, { useState } from "react";
import { TextField } from "@mui/material";

const SingleInput = (props) => {
  const [datum, setDatum] = useState(props.datum[props.fieldName]);
  const { emitNewValue, fieldName } = props;

  const handleChange = (event) => {
    setDatum(event.target.value);
    emitNewValue(event.target.value);
  };

  return (
    <div>
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
