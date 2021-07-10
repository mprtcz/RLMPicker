import React, { useState } from "react";
import Multiselect from "multiselect-react-dropdown";
import { searchData } from "functions/searchData";

const MultiselectFilter = (props) => {
  const { data, filterType, onSelect } = props;
  const [selected, setSelected] = useState([]);

  const options = (data || [])
    .flatMap((datum) => datum[filterType])
    .filter((datum) => !!datum)
    .filter((datum, index, array) => array.indexOf(datum) === index)
    .map((datum) => {
      return {
        name: datum,
      };
    });

  const onSelectDone = (selectedItems) => {
    processSelection(selectedItems);
  };

  const onRemove = (selectedItems) => {
    processSelection(selectedItems);
  };

  const onSearch = (searchTerm) => {
    console.log("searched for ", searchTerm);
  };

  const processSelection = (selectedItems) => {
    const selectedItemsStrings = selectedItems.map((item) => item.name);

    onSelect({
      type: filterType,
      items: selectedItemsStrings,
    });
  };

  return (
    <div>
      <Multiselect
        options={options} // Options to display in the dropdown
        selectedValues={selected} // Preselected value to persist in dropdown
        onSelect={(e) => onSelectDone(e)} // Function will trigger on select event
        onRemove={(e) => onRemove(e)} // Function will trigger on remove event
        displayValue="name" // Property name to display in the dropdown options
        showCheckbox
      />
    </div>
  );
};

export default MultiselectFilter;
