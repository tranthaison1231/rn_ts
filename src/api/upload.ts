import request from './request';
import Config from 'react-native-config';

export const uploadPhoto = async (req) => {
  try {
    const data = new FormData();
    data.append('file', req.file);
    const response = await request.post('/api/uploads', data, {
      baseURL: Config.REACT_APP_API_UPLOAD_IMAGE,
    });
    req.onSuccess(response.data);
  } catch (error) {
    req.onError(error);
  }
};
