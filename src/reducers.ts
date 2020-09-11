import { combineReducers } from '@reduxjs/toolkit';
import auth from './screens/Auth/slice';
import contact from './screens/Contact/slice';

export type RootState = ReturnType<typeof rootReducer>;

const rootReducer = combineReducers({
  auth: auth,
  contact: contact,
});

export default rootReducer;
