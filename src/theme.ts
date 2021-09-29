import { extendTheme } from "@chakra-ui/react";

const colors = {
  blue: {
    900: "#1A365D",
    500: "#3182CE",
    800: "#2A4365",
  },
  purple: {
    700: "#553C9A",
    800: "#44337A",
    900: "#322659",
  },
};

export const theme = extendTheme({ colors });
