import { PRIMARY, WHITE } from "@styles/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  button: {
    height: 66,
    backgroundColor: PRIMARY,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
  },
  buttonText: {
    color: WHITE,
    fontSize: 24,
    fontFamily: "Poppins SemiBold",
    fontWeight: "semibold",
  },
})