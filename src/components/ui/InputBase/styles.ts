import { Colors } from "@styles/colors";
import { Typography } from "@styles/typography";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  inputStyle: {
    backgroundColor: Colors.SURFACE,
    ...Typography["body"],
    color: Colors.TEXT_INPUT,
    borderRadius: 12,
    paddingHorizontal: 10,
  },
  inputIPhone: {
    height: 48,
  },
});