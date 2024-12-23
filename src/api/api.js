import axios from 'axios';

const instance = axios.create({
  withCredentials: true,
  baseURL: 'http://localhost:3000/',
  headers: {
    'API-KEY': 'b1775b2f-c3a5-4509-8dc9-90b5629de7c3'
  }
});

export const usersAPI = {
  getUsers(currentPage = 1, pageSize = 10) {
    return instance.get(
      `users?_per_page=${pageSize}&_page=${currentPage}`.then((response) => {
        return response.data;
      })
    );
  },
  follow(userId) {
    return instance.post(`follow/${userId}`);
  },
  unfollow(userId) {
    return instance.delete(`unfollow${userId}`);
  },
  getProfile(userId) {
    return instance.get(`profile/` + userId);
  }
};

export const authAPI = {
  me() {
    return instance.get('auth/me');
  }
};
