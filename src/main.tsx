import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { initialStore } from "./store/store";
import { Provider } from "react-redux";

const store = initialStore;

import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "./theme";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ChakraProvider theme={theme}>
        <App />
      </ChakraProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
