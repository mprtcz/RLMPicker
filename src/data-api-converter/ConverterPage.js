import { Button, TextField } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { data, getNewEmptyVideoObject } from "data/new-data";
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
  const urls = data.map((item) => item.url);

  const [input, setInput] = useState("");
  const [usedUrls, setUsedUrls] = useState(data.map((item) => item.url));
  const [result, setResult] = useState("");

  const handleConvert = () => {
    setResult(convert(input));
  };

  const checkIfExists = (item) => {
    const urlToCheck = `https://www.youtube.com/watch?v=${item.id}`;
    const existing = urls.find((url) => url === urlToCheck);
    if (existing) {
      setUsedUrls(usedUrls.filter((url) => url === urlToCheck));
      console.log("Used urls: ", usedUrls);
      return data.find((item) => item.url === urlToCheck);
    }
    return null;
  };

  const convertReleaseDate = (date) => {
    const dateObj = new Date(date.value);

    return Date.UTC(
      dateObj.getFullYear(),
      dateObj.getMonth(),
      dateObj.getDate(),
      0,
      0,
      0
    );
  };

  const convert = (input) => {
    const inputJson = JSON.parse(input);
    console.log("inputJson", inputJson[0]);

    const sorted = inputJson
      .map((item) => item.items)
      .flat()
      .sort((a, b) => {
        return a.snippet.publishedAt.value - b.snippet.publishedAt.value;
      });

    console.log(
      "sorted ",
      sorted.map((item) =>
        new Date(item.snippet.publishedAt.value).toISOString()
      )
    );

    const resultConverted = sorted
      .map((item, index) => {
        item.index = index;
        return item;
      })
      .map((item) => {
        let existing = checkIfExists(item);
        console.log("existing", existing);
        if (existing) {
          return existing;
        }
        existing = getNewEmptyVideoObject();

        existing.id = item.index + 1;
        existing.episodeName = item.snippet.title;
        existing.description = item.snippet.description;
        existing.releaseDate = convertReleaseDate(item.snippet.publishedAt);
        existing.url = `https://www.youtube.com/watch?v=${item.id}`;

        return existing;
      });
    return JSON.stringify(resultConverted, null, 2);
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
