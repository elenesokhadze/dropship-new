import axios from "axios";
import { WEB_URL, WEB_URL_V1 } from "./Config";

axios.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${localStorage.getItem("token")}`;
  return config;
});

export const productsAPI = async () => {
  const results = await axios.get(WEB_URL_V1 + "products");
  return results.data.data;
};

export const login = async (email, password) => {
  try {
    const results = await axios.post(WEB_URL + "login", { email, password });
    localStorage.setItem("user", JSON.stringify(results.data.data));
    localStorage.setItem("token", results.data.data.token);
  } catch (error) {
    throw new Error(error);
  }
};

export const register = async (
  firstName,
  lastName,
  email,
  password,
  passwordConfirmation
) => {
  try {
    const results = await axios.post(WEB_URL + "register", {
      firstName,
      lastName,
      email,
      password,
      passwordConfirmation,
    });
    localStorage.setItem("user", JSON.stringify(results.data.data));
    localStorage.setItem("token", results.data.data.token);
  } catch (error) {
    throw new Error(error);
  }
};

export const cart = async () => {
  try {
    const results = await axios.get(WEB_URL_V1 + "cart");
    return results.data.data;
  } catch (error) {
    throw new Error(error);
  }
};

export const addToCart = async (productId, qty) => {
  const results = await axios.post(WEB_URL_V1 + "cart/add", { productId, qty });
  return results.data.data;
};

export const removeFromCart = async (id) => {
  try {
    await axios.post(WEB_URL_V1 + `cart/remove/${id}`);
  } catch (error) {
    console.log(error);
  }
};

export const getSingleProduct = async (id) => {
  try {
    const res = await axios.get(WEB_URL_V1 + `products/${id}`);
    return res && res.data.data;
  } catch (err) {
    throw new Error(err);
  }
};

export const addProduct = async (data) => {
  try {
    const res = await axios.post(WEB_URL_V1 + `products`, data);
    return res.data.data;
  } catch (err) {
    throw new Error(err);
  }
};

export const editProduct = async (id, data) => {
  try {
    const res = await axios.put(WEB_URL_V1 + `products/${id}`, data);
    return res.data.data;
  } catch (err) {
    throw new Error(err);
  }
};

export const removeProduct = async (id) => {
  try {
    const res = await axios.delete(WEB_URL_V1 + `products/${id}`);
    return res.data.data;
  } catch (err) {
    throw new Error(err);
  }
};
