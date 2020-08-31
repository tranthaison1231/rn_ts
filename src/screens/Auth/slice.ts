// @ts-ignore
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { showError } from '@/utils/exception';
import authApi from '../../api/auth';
import { ROLES } from '../../configs/constants';
import AsyncStorage from '@react-native-community/async-storage';

const setToken = (token) => {
  AsyncStorage.setItem('sessionToken', token.accessToken);
  AsyncStorage.setItem('refreshToken', token.refreshToken);
};

const removeToken = () => {
  AsyncStorage.removeItem('sessionToken');
  AsyncStorage.removeItem('refreshToken');
};

export const login = createAsyncThunk(
  'Auth/login',
  async (payload, { rejectWithValue }) => {
    try {
      const response = await authApi.login(payload.data);
      return response.data;
    } catch (error) {
      showError(error?.data);
      return rejectWithValue(error?.data?.message);
    }
  },
);

export const refreshToken = createAsyncThunk(
  'Auth/refreshToken',
  async (payload, { rejectWithValue }) => {
    try {
      const token = AsyncStorage.getItem('refreshToken');
      const response = await authApi.refreshToken({
        token,
      });
      return response.data;
    } catch (error) {
      showError(error?.data);
      return rejectWithValue(error?.data?.message);
    }
  },
);

export const signup = createAsyncThunk(
  'Auth/signup',
  async (payload, { rejectWithValue }) => {
    try {
      const response = await authApi.signup(payload.data);
      return response.data;
    } catch (error) {
      showError(error?.data);
      return rejectWithValue(error?.data?.message);
    }
  },
);

export const getInfo = createAsyncThunk(
  'Auth/getInfo',
  async (payload, { rejectWithValue }) => {
    try {
      const response = await authApi.getInfo();
      return response.data;
    } catch (error) {
      showError(error?.data);
      return rejectWithValue();
    }
  },
);

export const confirmEmail = createAsyncThunk(
  'Auth/confirmEmail',
  async (payload, { rejectWithValue }) => {
    try {
      const { email } = payload.data;
      const response = await authApi.confirmEmail({ email });
      return response.data;
    } catch (error) {
      showError(error?.data);
      return rejectWithValue();
    }
  },
);

export const resetPassword = createAsyncThunk(
  'Auth/resetPassword',
  async (payload, { rejectWithValue }) => {
    try {
      const { password, verifyCode } = payload.data;
      const response = await authApi.resetPassword({ password, verifyCode });
      return response.data;
    } catch (error) {
      showError(error?.data);
      return rejectWithValue();
    }
  },
);

export const { actions, reducer } = createSlice({
  name: 'Auth',
  initialState: {
    data: {
      name: '',
      role: ROLES.USER,
    },
    token: {},
    isAuth: !!localStorage.getItem('sessionToken'),
    messageError: null,
    loading: null,
  },
  reducers: {
    logout: (state) => {
      state.isAuth = false;
      removeToken();
    },
  },
  extraReducers: {
    [login.pending]: (state) => {
      state.loading = 'login';
    },
    [login.fulfilled]: (state, { payload }) => {
      setToken(payload);
      state.token = payload;
      state.isAuth = true;
      state.loading = null;
    },
    [login.rejected]: (state, { payload }) => {
      state.loading = null;
      state.messageError = payload;
    },
    [refreshToken.fulfilled]: (state, { payload }) => {
      setToken(payload);
      state.token = payload;
    },
    [signup.pending]: (state) => {
      state.loading = 'signup';
    },
    [signup.fulfilled]: (state) => {
      state.loading = null;
    },
    [signup.rejected]: (state, { payload }) => {
      state.loading = null;
      state.messageError = payload;
    },
    [getInfo.pending]: (state) => {
      state.loading = 'getInfo';
    },
    [getInfo.fulfilled]: (state, { payload }) => {
      state.data = payload;
      state.loading = null;
    },
    [getInfo.rejected]: (state) => {
      state.loading = null;
    },
    [confirmEmail.pending]: (state) => {
      state.loading = 'confirmEmail';
    },
    [confirmEmail.fulfilled]: (state) => {
      state.loading = null;
    },
    [confirmEmail.rejected]: (state) => {
      state.loading = null;
    },
    [resetPassword.pending]: (state) => {
      state.loading = 'resetPassword';
    },
    [resetPassword.fulfilled]: (state) => {
      state.loading = null;
    },
    [resetPassword.rejected]: (state) => {
      state.loading = null;
    },
  },
});

export default reducer;
