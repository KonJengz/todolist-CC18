import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import TodoListPage from "../pages/TodoListPage";

const router = createBrowserRouter([
  { path: "/", element: <LoginPage /> },
  { path: "/todo", element: <TodoListPage /> },
]);

export default function AppRouter() {
  return <RouterProvider router={router} />;
}
