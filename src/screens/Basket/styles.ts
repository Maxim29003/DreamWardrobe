import { FONT_COLOR_SECONDARY } from "@styles/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  centeredContainer: {
    alignItems: 'center',
    flex: 1,
  },
  footerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  separator: {
    borderColor: FONT_COLOR_SECONDARY,
    borderBottomWidth: 1,
  },
  boldText: {
    fontFamily: 'Poppins SemiBold',
    fontWeight: 'semibold',
  },
});
