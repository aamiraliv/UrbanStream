import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import { Intro } from "./page/Intro";
import Home from "./page/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Intro />,
  },
  {
    path: "/home",
    element: <Home />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
