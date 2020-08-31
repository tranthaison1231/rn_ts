import axios, { AxiosInstance } from 'axios';
import { unwrapResult } from '@reduxjs/toolkit';
// import AsyncStorage from '@react-native-community/async-storage';

// let isRefreshing = false;
// const subscribers: any[] = [];

// const onRefreshed = (authorisationToken: string) => {
//   subscribers.map((cb) => cb(authorisationToken));
// };

// const subscribeTokenRefresh = (cb: any) => {
//   subscribers.push(cb);
// };

// interface SetupAxiosInterceptors {
//   request: AxiosInstance;
// }

// const setupAxiosInterceptors = ({
//   request,
//   store,
//   refreshTokenAction,
//   logoutAction,
// }: SetupAxiosInterceptors) => {
//   request.interceptors.request.use(
//     (config) => {
//       const token = AsyncStorage.getItem('sessionToken');
//       if (token) {
//         config.headers.authorization = `Bearer ${token}`;
//       }
//       return config;
//     },
//     (error) => {
//       return Promise.reject(error.response || error.message);
//     },
//   );

//   request.interceptors.response.use(
//     (response) => {
//       return response;
//     },
//     (error) => {
//       const {
//         config,
//         response: { status, data },
//       } = error;
//       const originalRequest = config;

//       if (status === 401 && data?.message === 'jwt expired') {
//         if (!isRefreshing) {
//           store
//             .dispatch(refreshTokenAction())
//             .then(unwrapResult)
//             .then((payload) => {
//               isRefreshing = true;
//               onRefreshed(payload.accessToken);
//             });
//         }
//         const retryOriginalRequest = new Promise((resolve) => {
//           subscribeTokenRefresh((token) => {
//             originalRequest.headers.authorization = `Bearer ${token}`;
//             resolve(axios(originalRequest));
//           });
//         });
//         return retryOriginalRequest;
//       }
//       if (status === 401) {
//         store.dispatch(logoutAction());
//       }
//       return Promise.reject(error.response || error.message);
//     },
//   );
// };

// export default setupAxiosInterceptors;
