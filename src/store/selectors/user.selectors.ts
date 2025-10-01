
import { RootState } from "@store/store";

const UserSelectors = {
   user: (state: RootState) => state.user.currentUser,
}

export default UserSelectors;