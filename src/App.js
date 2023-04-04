import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import AuthContainer from "./screens/Layout/AuthContainer";
import LayoutWithRoute from "./screens/Layout";
import { MagicLink, Password, Signup } from "./screens/Auth";
import { NoMatch, Success } from "./screens/Util";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route element={<AuthContainer />}>
        <Route path="/" element={<Password />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/magiclink" element={<MagicLink />} />
        <Route path="/success" element={<Success />} />
        <Route path="*" element={<NoMatch />} />
      </Route>
      <Route element={<LayoutWithRoute />}></Route>
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
