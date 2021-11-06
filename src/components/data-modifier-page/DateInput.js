import React, { useState } from "react";

import { TextField } from "@mui/material";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};
const SUPPORTED_LOCALE = "en-US";
const DateInput = (props) => {
  const { emitNewValue, fieldName } = props;

  const convertTimestamp = (timestamp) => {
    const options = {
      year: "numeric",
      month: "short",
      day: "numeric",
    };
    const date = new Date(timestamp);

    return date.toLocaleDateString(SUPPORTED_LOCALE, options);
  };

  const [datum, setDatum] = useState(
    convertTimestamp(props.datum[props.fieldName])
  );

  const [error, setError] = useState(false);

  const handleChange = (event) => {
    const date = new Date(Date.parse(event.target.value));
    const utcMidnightDate = Date.UTC(
      date.getUTCFullYear(),
      date.getUTCMonth(),
      date.getUTCDate(),
      0,
      0,
      0
    );

    if (Number.isNaN(utcMidnightDate)) {
      setError(true);
    } else {
      setError(false);
      setDatum(convertTimestamp(utcMidnightDate));
      emitNewValue(utcMidnightDate);
    }
  };

  return (
    <div style={{ display: "flex" }}>
      <TextField
        style={{ flexGrow: 1 }}
        value={datum}
        error={error}
        onChange={handleChange}
        label={fieldName}
      />
    </div>
  );
};

export default DateInput;
