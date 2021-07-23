import React, { useEffect, useState } from "react";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { InputLabel, TextField } from "@material-ui/core";

const ItemSelect = (props) => {
  const { items, onSelect } = props;
  const [selectedItem, setSelectedItem] = useState(null);
  const clearTitle = "-clear-";

  const [open, setOpen] = useState(false);

  const handleClose = () => setOpen(false);

  const handleOpen = () => setOpen(true);

  const createOptions = () => {
    const options = items
      .map((item, id) => {
        return item.moviesData.map((movie) => {
          return {
            title: movie.title,
            videoId: item.id,
            id,
          };
        });
      })
      .flat();

    return options.concat({ title: clearTitle, id: -1 });
  };
  const [options, setOptions] = useState(createOptions());

  const setSelectedItem1 = (e) => {
    console.log("e", e);
    setSelectedItem(e);
  };

  useEffect(() => {
    if (!selectedItem) {
      onSelect(items);
      return;
    }

    const filteredItems = items.filter((item) => {
      return item.id === selectedItem.videoId;
    });

    onSelect(filteredItems);
  }, [selectedItem]);

  const onSearchChanged = (e) => {
    const searched = e.target.value;
    const filteredOptions = options.filter((option) => {
      option.title.includes(searched);
    });
    setOptions(filteredOptions);
  };

  const handleKeyDown = (e) => {
    e.stopPropagation();
  };

  return (
    <div className="item-select">
      <InputLabel id="demo-simple-select-label">Select Movie</InputLabel>
      <Select
        className="single-select"
        open={open}
        onClose={handleClose}
        onOpen={handleOpen}
        onChange={(e) => setSelectedItem1(e)}
      >
        <TextField
          id="standard-basic"
          label="Search..."
          onKeyDown={handleKeyDown}
          onClick={handleOpen}
          onChange={(e) => onSearchChanged(e)}
        />
        {options.length &&
          options
            .sort((item1, item2) => {
              if (item2.title > item1.title) return -1;
              if (item1.title > item2.title) return 1;
              return 0;
            })
            .map((item2, key) => (
              <MenuItem value={item2.videoId} key={key}>
                {item2.title}
              </MenuItem>
            ))}
      </Select>
    </div>
  );
};

export default ItemSelect;
