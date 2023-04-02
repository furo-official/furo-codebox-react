import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import AuthContainer from "./screens/Layout/AuthContainer";
import { MagicLink, Password, Signup } from "./screens/Auth";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<AuthContainer />}>
      <Route path="/" element={<Password />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/magiclink" element={<MagicLink />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
