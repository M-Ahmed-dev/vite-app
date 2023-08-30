import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: "linearGradient(135deg, #fff 0%, #d0e8eb 100%)",
        fontFamily: "Noto Sans TC, sans-serif",
      },
    },
  },

  colors: {
    primary: "#215B7C",
  },

  fonts: {
    primary: {
      color: "primary",
      fontWeight: "700",
    },
    secondary: {
      color: "primary",
      fontWeight: "500",
    },
  },
});

export default theme;
