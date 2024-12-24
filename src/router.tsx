import { createBrowserRouter } from "react-router-dom";
import FormStep1 from "./pages/FormStep1";
import FormStep2 from "./pages/FormStep2";
import FormStep3 from "./pages/FormStep3";
import AllData from "./pages/AllData";

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <FormStep1 />,
  },
  {
    path: "/step2",
    element: <FormStep2 />,
  },
  {
    path: "/step3",
    element: <FormStep3 />,
  },
  {
    path: "/step4",
    element: <AllData />,
  },
]);
