import {
  Button,
  Checkbox,
  Input,
  InputLabel,
  ListItemText,
  makeStyles,
  MenuItem,
  Select,
  TextField,
} from "@material-ui/core";
import { data } from "data/new-data";
import React, { useEffect } from "react";
import MatMultiselect from "./MatMultiselect";

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
const useStyles = makeStyles((theme) => ({
  container: {},
  addSection: {
    display: "flex",
    alignItems: "center",
  },
  button: {
    maxHeight: 36,
  },
}));

const MultiselectWithDataAdd = (props) => {
  const classes = useStyles();
  const { array, title } = props;
  const episodesData = data;

  const onlyUnique = (value, index, self) => {
    return self.indexOf(value) === index;
  };
  const allSelectableValues = episodesData
    .map((episode) => episode[title])
    .flat()
    .filter(onlyUnique);

  useEffect(() => {
    console.log("array", array);
  }, [array]);

  const onSelect = (select) => {};
  const handleChange = (select) => {};
  const handleAddDatapoint = (select) => {};
  const handleAdd = (select) => {};

  return (
    <div className={classes.container}>
      <InputLabel id="demo-mutiple-checkbox-label">{title}</InputLabel>
      <Select
        labelId="demo-mutiple-checkbox-label"
        id="demo-mutiple-checkbox"
        multiple
        value={array || []}
        onChange={handleChange}
        input={<Input />}
        renderValue={(selected) => selected.join(", ")}
        MenuProps={MenuProps}
      >
        {allSelectableValues &&
          allSelectableValues.map((item, index) => (
            <MenuItem value={item} key={index}>
              <Checkbox checked={(array || []).indexOf(item) > -1} />
              <ListItemText primary={item} />
            </MenuItem>
          ))}
      </Select>
      <div className={classes.addSection}>
        <TextField
          onChange={handleAddDatapoint}
          id="standard-basic"
          label="Add value"
        />
        <Button
          color="primary"
          variant="contained"
          onClick={handleAdd}
          className={classes.button}
        >
          Add
        </Button>
      </div>
    </div>
  );
};

export default MultiselectWithDataAdd;
