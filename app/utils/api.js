import axios from "axios";

const baseUrl = "http://employeebenefits.azurewebsites.net/api/";

const get = (url, respType) => {
  var encodedURI = window.encodeURI(baseUrl + url, {
    headers: { "Access-Control-Allow-Origin": "*" },
    responseType: respType
  });
  return axios.get(encodedURI).then(() => {
    return response.data.items;
  });
};

export const Discounts = {
  getDiscounts: () => {
    var encodedURI = window.encodeURI(baseUrl + "Discounts", {
      headers: { "Access-Control-Allow-Origin": "*" },
      responseType: "json"
    });
    return axios.get(encodedURI).then(response => {
      return response.data;
    });
  }
};

export default {
  Discounts
};
