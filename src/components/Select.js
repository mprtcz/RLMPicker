import React, { useEffect, useState } from "react";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const ItemSelect = (props) => {
  const { items, onSelect } = props;
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    console.log("seelcted item: ", selectedItem);

    const filteredItems = items.filter((item) => {
      return item.id === selectedItem;
    });
    onSelect(filteredItems);
  }, [selectedItem]);

  return (
    <div className="item-select">
      <Select
        className="single-select"
        onChange={(e) => setSelectedItem(e.target.value)}
      >
        {items.length &&
          items
            .map((item) => {
              return item.moviesData.map((movie) => {
                return {
                  title: movie.title,
                  id: item.id,
                };
              });
            })
            .flat()
            .map((item2) => (
              <MenuItem value={item2.id}> {item2.title}</MenuItem>
            ))}
      </Select>
    </div>
  );
};

export default ItemSelect;
