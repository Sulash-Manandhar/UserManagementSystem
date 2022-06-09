// 1. Import `extendTheme`
import { extendTheme } from "@chakra-ui/react";

// 2. Call `extendTheme` and pass your custom values
const MyTheme = extendTheme({
  colors: {
    black: "#102A42",
    blue: "#49A6E9",
    darkBlue: "#617D9D",
    background: "#F1F5F8",
  },
});

export default MyTheme;
