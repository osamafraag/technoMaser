import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Loader from "../components/loader/loader";
const Home = React.lazy(() => import('../pages/home'));
const Cart = React.lazy(() => import('../pages/cart'));
const Completed = React.lazy(() => import('../pages/completed'));
const NotFound = React.lazy(() => import('../pages/notFound'));
const Dashboard = React.lazy(() => import('../pages/dashboard'));
const Login = React.lazy(() => import('../pages/login'));
const Profile = React.lazy(() => import('../pages/profile'));

export default function Router() {
  return (
    <Suspense fallback={<Loader />}>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/loved" element={<Cart />} />
      <Route path="/completed" element={<Completed />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/login" element={<Login />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
    </Suspense>
  );
}