import {
  Button,
  Checkbox,
  IconButton,
  Input,
  InputLabel,
  ListItemText,
  makeStyles,
  MenuItem,
  Select,
  TextField,
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import { data } from "data/new-data";
import React, { useEffect, useState } from "react";
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
  container: {
    minWidth: "50%",
  },
  addSection: {
    display: "flex",
    alignItems: "center",
  },
  addValueTextField: {
    flexGrow: 1,
  },
  addValueSection: { flexGrow: 1, display: "flex", alignItems: "center" },
  button: {
    maxHeight: 36,
  },
}));

const MultiselectWithDataAdd = (props) => {
  const classes = useStyles();
  const { array, title } = props;
  const [selectedOptions, setSelectedOptions] = useState(array);
  const episodesData = data;
  const [showAdd, setShowAdd] = useState(false);
  const [textFieldValue, setTextFieldValue] = useState("");

  const onlyUnique = (value, index, self) => {
    return self.indexOf(value) === index;
  };

  const gatherSelectableValues = () => {
    return episodesData
      .map((episode) => episode[title])
      .flat()
      .filter(onlyUnique);
  };
  const [selectableValues, setSelectableValues] = useState(
    gatherSelectableValues()
  );

  useEffect(() => {
    setSelectableValues(
      [...selectableValues, ...selectedOptions].filter(onlyUnique)
    );
  }, [selectedOptions]);

  const onSelect = (select) => {};
  const handleChange = (select) => {};

  const handleKeyDown = (keyDownEvent) => {
    if (keyDownEvent.keyCode === 13) {
      handleAdd();
    }
  };

  const handleAddDatapoint = (datapoint) => {
    setTextFieldValue(datapoint.target.value);
  };

  const handleAdd = () => {
    const newValue = textFieldValue;
    setSelectedOptions([...selectedOptions, newValue]);
    setTextFieldValue("");
    setShowAdd(false);
  };

  const handleShowAddButton = () => {
    setShowAdd(!showAdd);
  };

  return (
    <div className={classes.container}>
      <InputLabel id="demo-mutiple-checkbox-label">{title}</InputLabel>
      <Select
        labelId="demo-mutiple-checkbox-label"
        id="demo-mutiple-checkbox"
        multiple
        value={selectedOptions || []}
        onChange={handleChange}
        input={<Input />}
        renderValue={(selected) => selected.join(", ")}
        MenuProps={MenuProps}
      >
        {selectableValues &&
          selectableValues.map((item, index) => (
            <MenuItem value={item} key={index}>
              <Checkbox checked={(array || []).indexOf(item) > -1} />
              <ListItemText primary={item} />
            </MenuItem>
          ))}
      </Select>
      <div className={classes.addSection}>
        <div onClick={handleShowAddButton}>
          <IconButton color="secondary" aria-label="Add new value">
            <AddIcon />
          </IconButton>
        </div>
        {showAdd && (
          <div className={classes.addValueSection}>
            <TextField
              onChange={handleAddDatapoint}
              id="standard-basic"
              value={textFieldValue}
              onKeyDown={handleKeyDown}
              className={classes.addValueTextField}
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
        )}
      </div>
    </div>
  );
};

export default MultiselectWithDataAdd;
