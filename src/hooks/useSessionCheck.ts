import { account } from "@api/appwrite";
import UserActions from "@store/actions/user.actions";
import { useAppDispatch } from "./useAppDispatch";
import { useEffect } from "react";
import { AppState } from "react-native";
import UserSelectors from "@store/selectors/user.selectors";
import { useAppSelector } from "./useAppSelector";

export function useSessionCheck() {
  const dispatch = useAppDispatch();
  const user = useAppSelector(UserSelectors.user);

  const checkSession = async () => {
    try {
      await account.get(); // пробуем получить текущего пользователя
      console.log("checkSession 1")
    } catch (err) {
      console.log("checkSession 2")
      console.log("user", user)
      console.log("Session invalid, logging out", err);
      if(user){
         dispatch(UserActions.logout(user.sessionId));
      }
     
    }
  };

  useEffect(() => {
    console.log("checkSession")
    checkSession();

    const subscription = AppState.addEventListener("change", state => {
      if (state === "active") {
        checkSession(); // проверяем при возвращении из фона
      }
    });

    return () => subscription.remove();
  }, []);
}