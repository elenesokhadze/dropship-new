import {
  GET_PRODUCTS,
  SEARCH_PRODUCTS,
  SORT_PRODUCTS,
} from "./ProductActionTypes";

const initialState = {
  products: [],
  allProducts: [],
  searchedProducts: [],
};

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

const searchProducts = (search, data) => {
  return data.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
        products: action.payload.productData,
        allProducts: action.payload.productData,
      };
    case SORT_PRODUCTS:
      return {
        ...state,
        products: sortProducts(action.payload.sortBy, [...state.products]),
        allProducts: sortProducts(action.payload.sortBy, [
          ...state.allProducts,
        ]),
      };
    case SEARCH_PRODUCTS:
      return {
        ...state,
        products: searchProducts(action.payload.searchTerm, [
          ...state.allProducts,
        ]),
      };

    default:
      return {
        ...state,
      };
  }
};

export default productReducer;
