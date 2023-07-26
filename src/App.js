import Home from './pages/Home';
import './App.css';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';


import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: 
  <Home></Home>
    ,
  },
  {
    path: "/signup",
    element: <SignupPage></SignupPage>,
  },
  {
    path: "/login",
    element: <LoginPage></LoginPage>,
  },
]);


function App() {
  return (
    <div className="App">

{/* <Home></Home> */}
{/* <LoginPage></LoginPage> */}
{/* <SignupPage></SignupPage> */}
<RouterProvider router={router} />
    </div>
  );
}

export default App;
