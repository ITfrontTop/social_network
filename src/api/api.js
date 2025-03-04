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
      `users?_page=${currentPage}&_per_page=${pageSize}`.then((response) => {
        return response.data;
      })
    );
  },
  follow(userId) {
    return instance.post(`follow/${userId}`);
  },
  unfollow(userId) {
    return instance.delete(`follow${userId}`);
  },
  getProfile(userId) {
    console.warn('Obsolete method. Please profileAPI object');
    return profileAPI.getProfile(userId);
  }
};

export const profileAPI = {
  getProfile(userId) {
    return instance.get('profile/' + userId);
  },
  getStatus(userId) {
    return instance.get('profile/status/' + userId);
  },
  updateStatus(status) {
    return instance.put('profile/status', {
      status
    });
  }
};

export const authAPI = {
  me() {
    return instance.get('auth/me');
  },
  login(email, password, rememberMe) {
    return instance.post(`auth/login`, { email, password, rememberMe });
  },
  logout() {
    return instance.delete(`auth/login`);
  },
  saveProfile(profile) {
    return instance.put(`profile`, profile);
  }
};

export securityAPI = {
  getCaptchaUrl() {
    return instance.get(`security/get-captcha-url`)
  },
}