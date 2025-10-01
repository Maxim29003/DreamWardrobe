import { createEntityAdapter, createSlice, current } from '@reduxjs/toolkit';
import UserActions from '@store/actions/user.actions';
import { UserType } from '@type/User.types';

type UserState = {
  currentUser: UserType | null;
};

const initialState: UserState = {
  currentUser: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(UserActions.signIn.fulfilled, (state, action) => {
      console.log(action.payload);
      state.currentUser = action.payload;
    });

    builder.addCase(UserActions.logout.fulfilled, (state, action) => {
      console.log('logout', action.payload);
      state.currentUser = null;
    });

    builder.addCase(UserActions.logout.rejected, (state, action) => {
      console.log('logout', action.payload);
      state.currentUser = null;
    });
    return builder;
  },
});

export default userSlice.reducer;
