import App from "App";
import FormDolci from "components/FormDolci/FormDolci";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Aggiungi from "views/HomePage/Aggiungi/Aggiungi";
import HomePage from "views/HomePage/HomePage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="*" element={<App />}>
      <Route path="" element={<HomePage />} />
      <Route path="aggiungi" element={<Aggiungi />}>
        <Route path="" element={<FormDolci />} />
      </Route>
    </Route>
  )
);

export default router;
