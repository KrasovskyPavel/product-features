import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User, UserSchema } from 'entities/User/model/types/user';
import { USER_LOCALSTORAGE_KEY } from 'shared/constants/localstorage';

const initialState: UserSchema = {
  authData: null
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setAuthData: (state, action: PayloadAction<User>) => {
      state.authData = action.payload;
    },
    initAuthData: (state) => {
      const user = localStorage.getItem(USER_LOCALSTORAGE_KEY);
      if (user) {
        state.authData = JSON.parse(user);
      }
    },
    logout: (state) => {
      state.authData = undefined;
      localStorage.removeItem(USER_LOCALSTORAGE_KEY);
    }
  },
});

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
