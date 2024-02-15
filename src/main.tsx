import React from "react";
import ReactDOM from "react-dom/client";
//import App from "./App";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";

const router = createBrowserRouter([]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider>
      {/* <App /> */}
      <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>
);
