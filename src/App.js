import Home from './pages/Home';
import './App.css';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import { Cart } from './features/cart/Cart';
import CheckoutPage from './pages/CheckoutPage';
import ProductDetailPage from './pages/ProductDetailPage';


import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import CartPage from './pages/CartPage';

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
  {
    path: "/cart",
    element: 
    <CartPage></CartPage>,
  },
  {
    path: "/checkout",
    element: <CheckoutPage></CheckoutPage>,
  },
  {
    path: "/product-detail/:id",
    element: <ProductDetailPage></ProductDetailPage>,
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
