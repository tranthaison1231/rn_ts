// @ts-ignore
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import { showError } from '@/utils/exception';
import AsyncStorage from '@react-native-community/async-storage';
import authApi from '@/api/auth';

interface TokenObject {
  accessToken: string;
  refreshToken: string;
}

const setToken = (token: TokenObject) => {
  AsyncStorage.setItem('accessToken', token.accessToken);
  AsyncStorage.setItem('refreshToken', token.refreshToken);
};

const removeToken = () => {
  AsyncStorage.removeItem('accessToken');
  AsyncStorage.removeItem('refreshToken');
};

export const login = createAsyncThunk(
  'Auth/login',
  async (payload: any, { rejectWithValue }) => {
    try {
      const { data } = payload;
      const response = await authApi.login(data);
      return response.data;
    } catch (error) {
      // showError(error?.data);
      return rejectWithValue(error?.data?.message);
    }
  },
);

// export const refreshToken = createAsyncThunk(
//   'Auth/refreshToken',
//   async (payload, { rejectWithValue }) => {
//     try {
//       const token = AsyncStorage.getItem('refreshToken');
//       const response = await authApi.refreshToken({
//         token,
//       });
//       return response.data;
//     } catch (error) {
//       showError(error?.data);
//       return rejectWithValue(error?.data?.message);
//     }
//   },
// );

// export const signup = createAsyncThunk(
//   'Auth/signup',
//   async (payload, { rejectWithValue }) => {
//     try {
//       const response = await authApi.signup(payload.data);
//       return response.data;
//     } catch (error) {
//       showError(error?.data);
//       return rejectWithValue(error?.data?.message);
//     }
//   },
// );

// export const getInfo = createAsyncThunk(
//   'Auth/getInfo',
//   async (payload, { rejectWithValue }) => {
//     try {
//       const response = await authApi.getInfo();
//       return response.data;
//     } catch (error) {
//       // showError(error?.data);
//       return rejectWithValue();
//     }
//   },
// );

// export const confirmEmail = createAsyncThunk(
//   'Auth/confirmEmail',
//   async (payload, { rejectWithValue }) => {
//     try {
//       const { email } = payload.data;
//       const response = await authApi.confirmEmail({ email });
//       return response.data;
//     } catch (error) {
//       // showError(error?.data);
//       return rejectWithValue(error?.data);
//     }
//   },
// );

// export const resetPassword = createAsyncThunk(
//   'Auth/resetPassword',
//   async (payload, { rejectWithValue }) => {
//     try {
//       const { password, verifyCode } = payload.data;
//       const response = await authApi.resetPassword({ password, verifyCode });
//       return response.data;
//     } catch (error) {
//       // showError(error?.data);
//       return rejectWithValue(error?.data);
//     }
//   },
// );

export const { actions, reducer } = createSlice({
  name: 'Auth',
  initialState: {
    token: {},
    isAuth: !!AsyncStorage.getItem('accessToken'),
    messageError: null,
    isLogining: false,
  },
  reducers: {
    logout: (state) => {
      state.isAuth = false;
      removeToken();
    },
  },
  extraReducers: (builder) => {
    builder.addCase(login.pending, (state) => {
      state.isLogining = true;
    });
    builder.addCase(login.fulfilled, (state, { payload }) => {
      setToken(payload);
      state.token = payload;
      state.isAuth = true;
      state.isLogining = false;
    });
    builder.addCase(login.rejected, (state, { payload }) => {
      state.isLogining = false;
      state.messageError = payload as any;
    });
  },
});

export default reducer;
