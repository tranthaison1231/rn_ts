import { combineReducers } from '@reduxjs/toolkit';
import auth from './screens/Auth/slice';

export type RootState = ReturnType<typeof rootReducer>;

const rootReducer = combineReducers({
  auth: auth,
});

export default rootReducer;
