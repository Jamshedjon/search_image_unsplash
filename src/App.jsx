import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home";
import Preview from "./components/Preview";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Error from "./components/Error";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      errorElement: <Error />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/photo/:id",
          element: <Preview />,
        },
      ],
    },
  ]);
  return <RouterProvider router={routes} />;
}

export default App;
