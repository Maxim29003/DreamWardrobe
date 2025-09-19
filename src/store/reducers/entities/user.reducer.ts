import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import UserActions from '@store/actions/user.actions';
import { UserType } from '@type/User.types';

export const userAdapter = createEntityAdapter({
  selectId: (user: UserType) => user.$id,
});

const userSlice = createSlice({
  name: 'user',
  initialState: userAdapter.getInitialState(),
  reducers: {},
  extraReducers: builder => {
    builder.addCase(UserActions.signIn.fulfilled, (state, action)=>{
      console.log(action.payload)
      userAdapter.addOne(state, action.payload)
    })

    builder.addCase(UserActions.logout.fulfilled, (state, action)=>{
      console.log("logout", action.payload)
      userAdapter.removeAll(state)
    })

    builder.addCase(UserActions.logout.rejected, (state, action)=>{
      console.log("logout", action.payload)
      userAdapter.removeAll(state)
    })
    return builder;
  },
});

export default userSlice.reducer;
