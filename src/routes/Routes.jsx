import Home from "src/pages/Home";
import About from "src/pages/About";
import List from "src/pages/List";

const rootLoader = () => {
  console.log("rootLoader");
};

const listLoader = () => {
  console.log("List loader");
};

export const ROUTES = [
  {
    path: "/",
    element: <List />,
    loader: rootLoader,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/list",
    element: <List />,
    loader: listLoader,
  },
];
