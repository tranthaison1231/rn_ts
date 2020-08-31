import request from './request';

const authApi = {
  login: async (data: any) => {
    return request.post('/auth/signin', data);
  },
  signup: async (data: any) => {
    return request.post('/auth/signup', data);
  },
  getInfo: async () => {
    return request('/auth/info');
  },
  confirmEmail: async (data: any) => {
    return request.post('/auth/forgot-password', data);
  },
  resetPassword: async (data: any) => {
    return request.post('/auth/change-password', data);
  },
  refreshToken: async (data: any) => {
    return request.post('/auth/refresh-token', data);
  },
};

export default authApi;
