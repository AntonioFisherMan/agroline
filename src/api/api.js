import * as axios from "axios";

const baseUrl = "http://62.90.247.238:8094/api/";


export const testAPI = {
  login(name, password, internal = false) {
    return axios.post(baseUrl + "auth/", {
      name,
      password,
      internal
    });
  },
  getOrder(orderNumber,startDate,token){
   return axios.get(baseUrl+`order/${orderNumber}?fromDate=${startDate}`,
   {
     headers:{ "Authorization": 'Bearer '+token, }
   }
  )},
  register(name, email, password) {
    return axios.post(baseUrl + "auth/user", { name, email, password });
  }
};