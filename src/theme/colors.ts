import { Colors } from "./types";

export const baseColors = {
  failure: "#FF5B5C",
  primary: "#5A8DEE",
  primaryBright: "#719DF0",
  primaryDark: "#2C6DE9",
  secondary: "#475F7B",
  success: "#39DA8A",
  warning: "#FDAC41",
};

export const brandColors = {
  binance: "#F0B90B",
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  background: "#F2F4F4",
  backgroundDisabled: "#E9EAEB",
  contrast: "#191326",
  invertedContrast: "#FFFFFF",
  input: "#eeeaf4",
  inputBorder: "#cccccc",
  tertiary: "#5A8DEE26",
  text: "#475F7B",
  textDisabled: "#BDC2C4",
  textSubtle: "#8494A7",
  borderColor: "#E9EAEB",
  card: "#FFFFFF",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #E6FDFF 0%, #F3EFFF 100%)",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  secondary: "#BDD1F8",
  background: "#1A233A",
  backgroundDisabled: "#394C62",
  contrast: "#FFFFFF",
  invertedContrast: "#191326",
  input: "#353D52",
  inputBorder: "#cccccc",
  primaryDark: "#0098A1",
  tertiary: "#5A8DEE26",
  text: "#BDD1F8",
  textDisabled: "#666171",
  textSubtle: "#8A99B5",
  borderColor: "#524B63",
  card: "#272E48",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #313D5C 0%, #3D2A54 100%)",
  },
};
