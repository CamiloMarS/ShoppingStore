import axios from "axios";

const URLS = {
  categories: "https://shoppingstore-224021.firebaseio.com/Categories/.json"
};

export const getApiCategoryProducts = () => {
  return axios({ method: "get", url: URLS.categories });
};
