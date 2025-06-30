import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import { Intro } from "./page/Intro";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Intro />,
  }
]);



function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
