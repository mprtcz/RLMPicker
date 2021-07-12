import React, { useEffect, useState } from "react";

import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import ListItemText from "@material-ui/core/ListItemText";
import Select from "@material-ui/core/Select";
import Checkbox from "@material-ui/core/Checkbox";
import Chip from "@material-ui/core/Chip";

const MatMultiselect = (props) => {
  const { data, filterType, onSelect } = props;
  const [selected, setSelected] = useState([]);

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

  useEffect(() => {
    const episodes = data
      .filter((episode) =>
        selected.every((selection) => episode.members.includes(selection))
      )
      .map((episode) => episode.id);
    console.log("setting in multi select: ", episodes);

    onSelect(episodes);
  }, [selected]);

  const options = (data || [])
    .flatMap((datum) => datum[filterType])
    .filter((datum) => !!datum)
    .filter((datum, index, array) => array.indexOf(datum) === index)
    .map((datum) => {
      return {
        name: datum,
      };
    });

  const handleChange = (change) => {
    setSelected(change.target.value);
  };

  return (
    <div className="multiselect-container">
      <InputLabel id="demo-mutiple-checkbox-label">Select cast</InputLabel>
      <Select
        labelId="demo-mutiple-checkbox-label"
        id="demo-mutiple-checkbox"
        multiple
        value={selected}
        onChange={handleChange}
        input={<Input />}
        renderValue={(selected) => selected.join(", ")}
        MenuProps={MenuProps}
      >
        {options.map((item) => (
          <MenuItem key={item.name} value={item.name}>
            <Checkbox checked={selected.indexOf(item.name) > -1} />
            <ListItemText primary={item.name} />
          </MenuItem>
        ))}
      </Select>
    </div>
  );
};

export default MatMultiselect;
