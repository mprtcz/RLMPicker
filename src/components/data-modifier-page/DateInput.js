import React, { useState, useEffect } from "react";

import {
  ListItemText,
  MenuItem,
  Input,
  Select,
  TextField,
} from "@mui/material";
import { LOCALE_BY_LANGUAGE } from "./Locales";

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
const DateInput = (props) => {
  const { emitNewValue, fieldName } = props;
  const [locale, setLocale] = useState(navigator.language);

  const convertTimestamp = (timestamp) => {
    const options = {
      year: "numeric",
      month: "short",
      day: "numeric",
    };
    const date = new Date(timestamp);
    console.log("date", date);

    return date.toLocaleDateString(locale, options);
  };

  const [datum, setDatum] = useState(
    convertTimestamp(props.datum[props.fieldName])
  );

  const handleChange = (event) => {
    setDatum(event.target.value);
    emitNewValue(event.target.value);
  };

  const handleLocaleChange = (event) => {
    setLocale(event.target.value);
  };

  useEffect(() => {
    setDatum(convertTimestamp(props.datum[props.fieldName]));
  }, [locale]);

  return (
    <div style={{ display: "flex" }}>
      <TextField
        style={{ flexGrow: 3 }}
        value={datum}
        onChange={handleChange}
        label={fieldName}
      />
      <Select
        style={{ flexShrink: 10 }}
        id="demo-mutiple-checkbox"
        value={locale}
        onChange={handleLocaleChange}
        input={<Input />}
        renderValue={(selected) => selected}
        MenuProps={MenuProps}
      >
        {LOCALE_BY_LANGUAGE &&
          LOCALE_BY_LANGUAGE.map((item, index) => (
            <MenuItem value={item.locale} key={index}>
              <ListItemText primary={item.name} />
            </MenuItem>
          ))}
      </Select>
    </div>
  );
};

export default DateInput;
