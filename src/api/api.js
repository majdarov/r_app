import * as axios from 'axios';
import apiConfig from './apiConfig.json';

const apiSamurai = axios.create(apiConfig.apiSamurai);

export const usersApi = {
  getUsers(pageNumber, pageSize) {
    return apiSamurai
      .get(`users`, { params: { page: pageNumber, count: pageSize } })
      .then((res) => res.data);
  },
  followUser(id) {
    return apiSamurai.post(`follow/${id}`).then((res) => res.data);
  },
  unFollowUser(id) {
    return apiSamurai.delete(`follow/${id}`).then((res) => res.data);
  },
  getUserId(id) {
    console.warn('Deprecated method. Pliese use profileApi');
    return profileApi.getProfile(id);
  },
  getAuth() {
    return apiSamurai
      .get('auth/me')
      .then((res) => res.data)
      .catch((e) => e.message);
  },
};

export const profileApi = {
  getProfile(id) {
    return apiSamurai.get(`profile/${id}`).then((res) => res.data);
  },
  getStatus(id) {
    return apiSamurai.get(`profile/status/${id}`).then((res) => res.data);
  },
  updateStatus(status) {
    return apiSamurai.put(`profile/status`, { status });
  },
};
