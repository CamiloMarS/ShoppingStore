import axios from "axios";

const URLS = {
  categories: "https://shoppingstore-224021.firebaseio.com/Categories/.json",
  products: "https://shoppingstore-224021.firebaseio.com/Products/.json"
};

export const getApiCategoryProducts = () => {
  return axios({ method: "get", url: URLS.categories });
};

export const getProducts = () => {
  return axios({ method: "get", url: URLS.products });
};
