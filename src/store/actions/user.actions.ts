import { account } from '@api/appwrite';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { CreateUserType } from '@type/CreateUser.types';
import { UserType } from '@type/User.types';

const UserActions = {
  signIn: createAsyncThunk(
    'user/sigIn',
    async ({ email, password }: CreateUserType, thunkAPI) => {
      try {
        console.log('user/signIn');
        const session = await account.createEmailPasswordSession(
          email,
          password,
        );
        const userData = await account.get();
        const user: UserType = {
          ...userData,
          sessionId: session.$id,
        };
        return user;
      } catch (error: any) {
        return thunkAPI.rejectWithValue(error.message ?? 'Unknown error');
      }
    },
  ),
  logout: createAsyncThunk('user/logout', async (sessionId: string) => {
    const result = await account.deleteSession(sessionId);
    return result;
  }),
};

export default UserActions;
