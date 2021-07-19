import ProductAPI from "../products/ProductAPI";
import {
  GET_PRODUCTS,
  SEARCH_PRODUCTS,
  SORT_PRODUCTS,
} from "./ProductActionTypes";

export const getProducts = () => async (dispatch) => {
  const productApi = ProductAPI("api/v1/products");
  const products = await productApi.get();

  dispatch({
    type: GET_PRODUCTS,
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
