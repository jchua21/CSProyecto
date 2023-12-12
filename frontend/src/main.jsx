import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import BaseTemplate from "./templates/BaseTemplate";
import AuthTemplate from "./templates/Auth/AuthTemplate";
import MainTemplate from "./templates/Main/MainTemplate";

import LoginPage, { action as loginAction } from "./routes/login";
import EventsPage, { loader as eventsLoader } from "./routes/private/events";
import PersonalPage from "./routes/private/personal";
import { action as enrollAction } from "./routes/private/enroll";

import AdmingGuard from "./routes/private/admin/adminGuard";
import CreateEventsPage, {
  action as createEventAction,
} from "./routes/private/admin/create";

import { AuthProvider, loader as authLoader } from "./context/AuthProvider";
import AdminPage, { loader as adminLoader } from "./routes/private/admin/admin";
import { action as destroyAction } from "./routes/private/admin/destroy";
import EditPage, {
  loader as editLoader,
  action as editEventAction,
} from "./routes/private/admin/edit";

const router = createBrowserRouter([
  {
    element: <BaseTemplate />,
    children: [
      {
        element: <AuthTemplate />,
        children: [
          {
            path: "/auth/login",
            element: <LoginPage />,
            action: loginAction,
          },
        ],
      },
      {
        element: <AuthProvider />,
        loader: authLoader,
        children: [
          {
            element: <MainTemplate />,
            children: [
              {
                path: "/events",
                element: <EventsPage />,
                loader: eventsLoader,
              },
              {
                path: "/personal",
                element: <PersonalPage />,
              },
              {
                path: "/enroll",
                action: enrollAction,
              },
              {
                element: <AdmingGuard />,
                children: [
                  {
                    path: "/admin",
                    element: <AdminPage />,
                    loader: adminLoader,
                  },
                  {
                    path: "/admin/edit/:id",
                    element: <EditPage />,
                    loader: editLoader,
                    action: editEventAction,
                  },
                  {
                    path: "/admin/destroy",
                    action: destroyAction,
                  },
                  {
                    path: "/admin/create",
                    element: <CreateEventsPage />,
                    action: createEventAction,
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
