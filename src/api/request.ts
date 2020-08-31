import axios from 'axios';
import qs from 'query-string';
import Config from 'react-native-config';

const request = axios.create({
  baseURL: `${Config.REACT_APP_SERVER_URL}/api`,
  timeout: 10000,
  paramsSerializer: (params) => qs.stringify(params),
});

export default request;
