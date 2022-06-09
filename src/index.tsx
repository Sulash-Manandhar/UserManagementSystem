import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app";
import MyTheme from "./themes/MyTheme";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ChakraProvider theme={MyTheme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
