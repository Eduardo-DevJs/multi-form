import { RouterProvider } from "react-router-dom";
import { Router } from "./router";
import { FormProvider } from "./contexts/FormContext";

export default function App() {
  return (
    <FormProvider>
      <RouterProvider router={Router} />
    </FormProvider>
  );
}
