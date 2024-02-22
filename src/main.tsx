import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import App from "./pages/App/App";
import Course from "./pages/Course/Course";
import CourseDetails from "./pages/CourseDetails/CourseDetails";
import Dashboard from "./pages/Dashboard/Dashboard";
import Profile from "./pages/Profile/Profile";
import EditUser from "./pages/User/EditUser";
//import UserList from "./pages/User/UserList";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/Course",
    element: <Course />,
  },
  {
    path: "/CourseDetails",
    element: <CourseDetails />,
  },
  {
    path: "/Dashboard",
    element: <Dashboard />,
  },
  {
    path: "/Profile",
    element: <Profile />,
  },
  {
    path: "/EditUser",
    element: <EditUser />,
  },
  // {
  //   path: "/UserList",
  //   element: <UserList />,
  // },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>
);
