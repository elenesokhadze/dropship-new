export const sortProducts = (sort, data) => {
  if (sort === "asc") {
    return data.sort((a, b) => b.price - a.price);
  } else if (sort === "desc") {
    return data.sort((a, b) => a.price - b.price);
  } else if (sort === "desc") {
    return data.sort((a, b) => a.price - b.price);
  } else if (sort === "alphAsc") {
    return data.sort((a, b) => (a.title > b.title ? 1 : -1));
  } else if (sort === "alphDesc") {
    return data.sort((a, b) => (a.title > b.title ? -1 : 1));
  } else if (sort === "sort") {
    return data.sort((a, b) => a.id - b.id);
  }
};
