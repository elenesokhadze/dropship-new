import ProductAPI from "../products/ProductAPI";
import {
  Fetch_Products,
  SEARCH_PRODUCTS,
  SORT_PRODUCTS,
  FILTER_PRODUCTS_BY_PRICE,
  SELECT_ONE_PRODUCT,
  REMOVE_ONE_PRODUCT,
  SELECT_ALL_PRODUCT,
  REMOVE_ALL_PRODUCT,
} from "./ProductActionTypes";

export const getProducts = () => async (dispatch) => {
  const productApi = ProductAPI("api/v1/products");
  const products = await productApi.get();

  dispatch({
    type: Fetch_Products,
    payload: {
      productData: products.data.data,
    },
  });
};

export const sortProducts = (sortType) => {
  return {
    type: SORT_PRODUCTS,
    payload: {
      sortBy: sortType,
    },
  };
};

export const searchProducts = (searchTerm) => {
  return {
    type: SEARCH_PRODUCTS,
    payload: {
      searchTerm,
    },
  };
};

export const filterProducts = (price) => {
  return {
    type: FILTER_PRODUCTS_BY_PRICE,
    payload: price,
  };
};

export const selectOne = (item) => {
  return {
    type: SELECT_ONE_PRODUCT,
    payload: item,
  };
};

export const removeOne = (id) => {
  return {
    type: REMOVE_ONE_PRODUCT,
    payload: id,
  };
};

export const selectAll = (data) => {
  return {
    type: SELECT_ALL_PRODUCT,
    payload: data,
  };
};

export const removeAll = () => {
  return {
    type: REMOVE_ALL_PRODUCT,
    payload: [],
  };
};
