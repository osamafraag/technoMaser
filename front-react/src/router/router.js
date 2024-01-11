import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Loader from "../components/loader/loader";
// const Home = React.lazy(() => import('../pages/home'));
// const ProductDetails = React.lazy(() => import('../pages/productDetails'));
// const Login = React.lazy(() => import('../pages/login'));
// const Register = React.lazy(() => import('../pages/register'));
// const Cart = React.lazy(() => import('../pages/cart'));
const NotFound = React.lazy(() => import('../pages/notFound'));

export default function Router() {
  return (
    <Suspense fallback={<Loader />}>
    <Routes>
      {/* <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/:id" element={<ProductDetails />} /> */}
      <Route path="/osama" element={<NotFound />} />
    </Routes>
    </Suspense>
  );
}