export const filterData = (inputValue, restaurants) => {
  const filterdata = restaurants.filter((restaurant) => {
    return restaurant?.info?.name
      ?.toLowerCase()
      .includes(inputValue.toLowerCase());
  });
  return filterdata;
};
