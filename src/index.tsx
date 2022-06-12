import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom/client";
import { createStandaloneToast } from "@chakra-ui/toast";
import App from "./app";
import MyTheme from "./themes/MyTheme";

const { ToastContainer } = createStandaloneToast();

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ChakraProvider theme={MyTheme}>
      <App />
      <ToastContainer />
    </ChakraProvider>
  </React.StrictMode>
);
