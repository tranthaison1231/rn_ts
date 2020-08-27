import { combineReducers } from '@reduxjs/toolkit';

export type RootState = ReturnType<typeof rootReducer>;

const rootReducer = combineReducers({});

export default rootReducer;
