import React, { useEffect, useState } from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  TextField,
  Typography,
} from "@material-ui/core";

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
        value={datum}
        onChange={handleChange}
        id="standard-basic"
        label={fieldName}
      />
    </div>
  );
};

export default SingleInput;
