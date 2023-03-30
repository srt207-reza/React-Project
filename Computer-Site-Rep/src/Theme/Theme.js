import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  initialColorMode: "light",
  useSystemColorMode: true,
  semanticTokens: {
    colors: {
      transparent: "transparent",
      background: {
        default: "#EDF2F7",
        _dark: "#44337A",
      },
      primary: {
        default: "RGBA(255, 255, 255, 0.16)",
        _dark: "RGBA(0, 0, 0, 0.80)",
      },
      secondary: {},
      text: {
        default: "gray.900",
        _dark: "gray.50",
      },
    },
  },
});

export default theme;
