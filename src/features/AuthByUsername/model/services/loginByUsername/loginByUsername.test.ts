import axios from 'axios';
import { Dispatch } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { loginByUsername } from './loginByUsername';

jest.mock('axios');

const mockedAxios = jest.mocked(axios, true);

describe('loginByUsername.test', () => {
  let dispatch: Dispatch;
  let getState: () => StateSchema;

  beforeEach(() => {
    dispatch = jest.fn();
    getState = jest.fn();
  });

  test('success', async () => {
    const userValue = { username: '123', id: '1' };
    mockedAxios.post.mockReturnValue(Promise.resolve({ data: userValue }));
    const action = loginByUsername({ username: '123', password: '123' });
    const result = await action(dispatch, getState, undefined as any);

    // expect(dispatch).toHaveBeenCalledWith(userActions.setAuthData(userValue));
    // expect(mockedAxios.post).toHaveBeenCalled();
    // expect(result.meta.requestStatus).toBe('fulfilled');
  });

  test('error', async () => {
    mockedAxios.post.mockReturnValue(Promise.resolve({ status: 403 }));
    const action = loginByUsername({ username: '123', password: '123' });
    const result = await action(dispatch, getState, undefined as any);

    // expect(mockedAxios.post).toHaveBeenCalled();
    // expect(result.meta.requestStatus).toBe('rejected');
  });
});
