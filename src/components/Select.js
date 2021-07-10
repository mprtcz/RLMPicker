import React, { useEffect, useState } from "react";

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
      <select onChange={(e) => setSelectedItem(e.target.value)}>
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
            .map((item2) => <option value={item2.id}> {item2.title}</option>)}
      </select>
    </div>
  );
};

export default ItemSelect;
