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
import { sortProducts } from "../../filterMethods/sortProducts";

const initialState = {
  products: [],
  allProducts: [],
  searchedProducts: [],
  selectedProducts: [],
  searchQuery: "",
  selectProduct: [],
};

export const filterProducts = (value1, value2, data) => {
  data.filter((item) => item.price >= value1 && item.price <= value2);
};
const searchProducts = (search, data) => {
  return data.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case Fetch_Products:
      return {
        ...state,
        products: action.payload.productData,
        allProducts: action.payload.productData,
        new: action.payload.productData,
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

    case FILTER_PRODUCTS_BY_PRICE:
      return {
        ...state,
        products: action.payload,
      };
    case SELECT_ONE_PRODUCT:
      return {
        ...state,
        selectedProducts: [...state.selectedProducts, action.payload],
      };
    case REMOVE_ONE_PRODUCT:
      return {
        ...state,
        selectedProducts: [
          ...state.selectedProducts.filter((id) => id !== action.payload),
        ],
      };
    case SELECT_ALL_PRODUCT:
      return {
        ...state,
        selectedProducts: action.payload,
      };
    case REMOVE_ALL_PRODUCT:
      return {
        ...state,
        selectedProducts: action.payload,
      };

    default:
      return {
        ...state,
      };
  }
};

export default productReducer;
