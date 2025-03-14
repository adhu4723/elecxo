import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./layout/Layout";
import NotFound from "./pages/NotFound";
import Loader from "./components/Loader";
import { ToastContainer, toast } from 'react-toastify';
import Login from "./pages/LoginPage";
import Signup from "./pages/SignUp";
import ProtectedRoute from "./components/ProtectRoute";
import Checkout from "./pages/CheckOut";
import ProductDetails from "./pages/ProductDetails";
import ScrollToTop from "./components/ScrollTop";
import ProfileForm from "./pages/ProfileSettings";

// Lazy load components
const HomePage = lazy(() => import("./pages/HomePage"));
const ProductList = lazy(() => import("./pages/ProductList"));

function App() {
  return (
    <Suspense fallback={<div className="w-fit mx-auto mt-[250px] bg-transparent"><Loader/></div>}>
      <ToastContainer />
      <ScrollToTop/>
      <Routes>
        
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/product/:category" element={<ProductList />} />
          <Route path="/*" element={<NotFound />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route element={<ProtectedRoute/>}>
          <Route path="/checkout" element={<Checkout />}></Route>
          <Route path="/profile" element={<ProfileForm />}></Route>
          </Route>
          <Route path="/productdetails/:id" element={<ProductDetails />}></Route>
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
