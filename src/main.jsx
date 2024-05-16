import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const colors = {
  brand: {
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac",
  },
  orange: {
    900: "#7b341e",
    800: "#9c4221",
    700: "#dd6b20",
    600: "#ed8936",
    500: "#f6ad55",
    400: "#fbd38d",
    300: "#fefcbf",
    200: "#fffaf0",
    100: "#ffedd5",
    50: "#fffaf0",
  },
};

const theme = extendTheme({ colors });

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
);
