import React, { useEffect, useState } from "react";

import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemText from "@material-ui/core/ListItemText";
import Select from "@material-ui/core/Select";
import Checkbox from "@material-ui/core/Checkbox";

const MatMultiselect = (props) => {
  const { data, filterType, onSelect, title } = props;
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
    const episodes = data.filter((episode) =>
      selected.every((selection) => episode[filterType].includes(selection))
    );

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
      <InputLabel id="demo-mutiple-checkbox-label">{title}</InputLabel>
      <Select
        labelId="demo-mutiple-checkbox-label"
        id="demo-mutiple-checkbox"
        multiple
        value={selected}
        onChange={handleChange}
        input={<Input />}
        // @ts-ignore
        renderValue={(selected) => selected.join(", ")}
        MenuProps={MenuProps}
      >
        {options &&
          options.map((item) => (
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
