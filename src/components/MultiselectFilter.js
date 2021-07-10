import React, { useState } from "react";
import Multiselect from "multiselect-react-dropdown";

const MultiselectFilter = (props) => {
  const { data, filterType } = props;
  const [selected, setSelected] = useState([]);
  console.log("data in select", data);

  const options = (data || [])
    .flatMap((datum) => datum[filterType])
    .filter((datum) => !!datum)
    .filter((datum, index, array) => array.indexOf(datum) === index)
    .map((datum) => {
      return {
        name: datum,
      };
    });
  console.log("options in select", options);

  const onSelect = (e) => {
    console.log(e);
  };
  const onRemove = (e) => {
    console.log(e);
  };

  return (
    <div>
      <Multiselect
        options={options} // Options to display in the dropdown
        selectedValues={selected} // Preselected value to persist in dropdown
        onSelect={(e) => onSelect(e)} // Function will trigger on select event
        onRemove={(e) => onRemove(e)} // Function will trigger on remove event
        displayValue="name" // Property name to display in the dropdown options
        showCheckbox
      />
    </div>
  );
};

export default MultiselectFilter;
