import React, { useEffect, useState } from "react";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const ItemSelect = (props) => {
  const { items, onSelect } = props;
  const [selectedItem, setSelectedItem] = useState(null);
  const clearTitle = "-clear-";
  const [options, setOptions] = useState(
    items.concat([{ moviesData: [{ title: clearTitle, id: -1 }] }])
  );

  useEffect(() => {
    if (!selectedItem) {
      onSelect(options.map((item) => item.id));
      return;
    }
    const filteredItems = options
      .map((item) => item.id)
      .filter((id) => {
        return id === selectedItem;
      });

    console.log("single select items: ", items);

    onSelect(filteredItems);
  }, [selectedItem]);

  return (
    <div className="item-select">
      <Select
        className="single-select"
        onChange={(e) => setSelectedItem(e.target.value)}
      >
        {options.length &&
          options
            .map((item) => {
              return item.moviesData.map((movie) => {
                return {
                  title: movie.title,
                  id: item.id,
                };
              });
            })
            .flat()
            .sort((item1, item2) => {
              if (item2.title > item1.title) return -1;
              if (item1.title > item2.title) return 1;
              return 0;
            })
            .map((item2, key) => (
              <MenuItem value={item2.id} key={key}>
                {item2.title}
              </MenuItem>
            ))}
      </Select>
    </div>
  );
};

export default ItemSelect;
