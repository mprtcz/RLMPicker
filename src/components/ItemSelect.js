import React, { useEffect, useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { InputLabel, TextField } from "@mui/material";

const ItemSelect = (props) => {
  const { items, onSelect } = props;
  const clearTitle = "-clear-";
  const [open, setOpen] = useState(false);

  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);

  const [options, setOptions] = useState([]);

  useEffect(() => {
    setOptions(createOptions());
  }, [items]);

  const createOptions = () => {
    return items
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
  };

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
    const filteredOptions = createOptions().filter((option) =>
      option.title.toLowerCase().includes(searched.toLowerCase())
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
        variant="standard"
        className="single-select"
        open={open}
        onClose={handleClose}
        onOpen={handleOpen}
        onChange={(e) => selectedItemChanged(e)}
      >
        <TextField
          id="standard-basic"
          className="movie-search-input"
          label="Search..."
          onKeyDown={handleKeyDown}
          onClick={handleOpen}
          onChange={(e) => onSearchChanged(e)}
        />

        <MenuItem value={-1} key={-1}>
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
