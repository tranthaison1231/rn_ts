import request from './request';

const transactionApi = {
  getAnalytic: async (params) => {
    return request('/transactions/analysis', {
      params,
    });
  },
  getPredict: async () => {
    return request('/transactions/predict');
  },
};

export default transactionApi;
