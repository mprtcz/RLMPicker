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

  useEffect(() => {
    console.info("datum name changed to ", datum);
  }, [datum]);

  const handleChange = (event) => {
    console.log("event", event);

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
