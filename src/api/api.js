import * as axios from 'axios';
import apiConfig from './apiConfig.json';

// const apiSamurai = axios.create({
//   baseURL: 'https://social-network.samuraijs.com/api/1.0/',
//   withCredentials: true,
//   headers: {
//     'API-KEY': '1204f868-84dd-4ccb-ad64-0310201501d1',
//   },
// });

const apiSamurai = axios.create(apiConfig.apiSamurai);
const apiProducts = axios.create(apiConfig.apiProducts);

export const usersApi = {
  getUsers(pageNumber, pageSize) {
    return apiSamurai
      .get(`users?page=${pageNumber}&count=${pageSize}`)
      .then((res) => res.data);
  },
  followUser(id) {
    return apiSamurai.post(`follow/${id}`).then((res) => res.data);
  },
  unFollowUser(id) {
    return apiSamurai.delete(`follow/${id}`).then((res) => res.data);
  },
  getUserId(id) {
    return apiSamurai.get(`profile/${id}`).then((res) => res.data);
  },
  getAuth() {
    return apiSamurai
      .get('auth/me')
      .then((res) => res.data)
      .catch((e) => e.message);
  },
};

export const productsApi = {
  // getGroups(search) {
  //   return apiProducts.get('groups' + search).then(res => res.items)
  // },
  // getProducts(search) {
  //   return apiProducts.get('products' + search).then(res => res.items)
  // },
  getData(path, search = '') {
    return apiProducts.get(path + search).then(res => res.data)
  }
}