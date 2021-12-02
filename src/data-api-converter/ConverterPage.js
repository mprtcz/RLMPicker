import { Button, TextField } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useState } from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 10,
    display: "flex",
    flexDirection: "column",
  },
}));
const ConverterPage = () => {
  const classes = useStyles();

  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleConvert = () => {
    setResult(convert(input));
  };

  const convert = (input) => {
    const inputJson = JSON.parse(input);
    console.log("inputJson", inputJson[0]);

    const output = inputJson
      .map((item) => item.items)
      .map((item) => item.map((item) => item.snippet))
      .flat();
    return JSON.stringify(output, null, 2);
  };

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <div className={classes.root}>
      <Button onClick={handleConvert}>Convert</Button>
      <div>
        <TextField
          style={{ width: "50%" }}
          value={input}
          multiline
          label="Input"
          onChange={handleInputChange}
        />

        <TextField
          InputProps={{
            readOnly: true,
          }}
          style={{ width: "50%" }}
          value={result}
          multiline
          label="Output"
        />
      </div>
    </div>
  );
};

export default ConverterPage;
