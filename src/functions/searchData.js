export const searchData = (data, filters) => {
  console.log("searching for ", filters);
  console.log("in ", data);

  let checker = (dataFieldItems, filter) =>
    filter.items.every((item) => dataFieldItems.includes(item));

  return data.filter((datum) => {
    return filters.every((filter) => {
      return checker(datum[filter.type], filter);
    });
  });
};
