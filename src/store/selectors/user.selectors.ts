import { userAdapter } from "@store/reducers/entities/user.reducer";
import { RootState } from "@store/store";

const userSelectors = userAdapter.getSelectors(
  (state: RootState) => state.user,
);

const UserSelectors = {
   user: userSelectors.selectAll,
}


export default UserSelectors;