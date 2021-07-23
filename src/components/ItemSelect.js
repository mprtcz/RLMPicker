import React, { useEffect, useState } from "react";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import { InputLabel, TextField } from "@material-ui/core";

const ItemSelect = (props) => {
  const { items, onSelect } = props;
  const clearTitle = "-clear-";
  const [open, setOpen] = useState(false);

  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);

  const [options, setOptions] = useState([]);

  useEffect(() => {
    const options1 = items
      .map((item) => {
        return item.moviesData.map((data) => {
          return { data, id: item.id };
        });
      })
      .flat()
      .map((item, id) => {
        return {
          title: item.data.title,
          videoId: item.id,
          id,
        };
      })
      .sort((item1, item2) => {
        if (item2.title > item1.title) return -1;
        if (item1.title > item2.title) return 1;
        return 0;
      });

    setOptions(options1);
  }, [items]);

  const selectedItemChanged = (e) => {
    const selectedMovieInternalId = e.target.value;
    if (selectedMovieInternalId === -1) {
      onSelect(items);
      return;
    }
    const selectedMovieId = options
      .filter((option) => {
        return option.id === selectedMovieInternalId;
      })
      .map((option) => {
        return option.videoId;
      })[0];

    const filteredItems = items.filter((item) => {
      return item.id === selectedMovieId;
    });

    onSelect(filteredItems);
  };

  const onSearchChanged = (e) => {
    const searched = e.target.value;
    const filteredOptions = options.filter((option) =>
      option.title.includes(searched)
    );

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
        onChange={(e) => selectedItemChanged(e)}
      >
        <TextField
          id="standard-basic"
          style={{ visibility: "hidden" }}
          label="Search..."
          onKeyDown={handleKeyDown}
          onClick={handleOpen}
          onChange={(e) => onSearchChanged(e)}
        />

        <MenuItem value={null} key={-1}>
          {clearTitle}
        </MenuItem>
        {options &&
          options.map((movie, key) => (
            <MenuItem value={movie.id} key={key}>
              {movie.title}
            </MenuItem>
          ))}
      </Select>
    </div>
  );
};

export default ItemSelect;
