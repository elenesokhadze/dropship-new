import axios from "axios";

const WEB_URL = "http://18.185.148.165:3000";

const ProductAPI = (query) => {
  return axios.create({
    baseURL: `${WEB_URL}/${query}`,
    headers: {
      Authorization: "Bearer" + localStorage.getItem("token"),
    },
  });
};

export default ProductAPI;
