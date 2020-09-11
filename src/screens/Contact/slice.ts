import { createSlice, nanoid } from '@reduxjs/toolkit';

export const { actions, reducer } = createSlice({
  name: 'Contact',
  initialState: {
    items: [],
  },
  reducers: {
    insertContact: (state, { payload }) => {
      state.items.push({
        id: nanoid(),
        ...payload,
      });
    },
  },
});

export const { getContacts, insertContact } = actions;

export default reducer;
