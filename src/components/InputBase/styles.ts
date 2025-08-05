import { FONT_COLOR_SECONDARY, WHITE } from "@styles/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  inputStyle: {
    backgroundColor: WHITE,
    fontFamily: 'Poppins Regular',
    fontWeight: 'regular',
    fontSize: 18,
    color: FONT_COLOR_SECONDARY,
    borderRadius: 12,
    paddingHorizontal: 10,
  },
  inputIPhone: {
    height: 48,
  },
});