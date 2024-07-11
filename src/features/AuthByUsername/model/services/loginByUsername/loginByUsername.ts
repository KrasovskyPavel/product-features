import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig, ThunkExtraArg } from "app/providers/StoreProvider";
import { User, userActions } from "entities/User";
import i18n from "shared/config/i18n/i18n";
import { USER_LOCALSTORAGE_KEY } from "shared/constants/localstorage";

interface LoginByUsernameProps {
    username: string,
    password: string
}

// eslint-disable-next-line max-len
export const loginByUsername = createAsyncThunk<User, LoginByUsernameProps, {rejectValue: string, extra: ThunkExtraArg}>(
  'login/loginByUsername',
  async (authData, thunkApi) => {
    const { extra, dispatch, rejectWithValue } = thunkApi;
    try {
      const response = await extra.api.post<User>('/login', authData);
      if (!response.data) {
        throw new Error();
      }

      localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data));
      dispatch(userActions.setAuthData(response.data));
      return response.data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(i18n.t('Вы ввели неверный логин или пароль'));
    }
  },
);
