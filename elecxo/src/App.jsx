import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./layout/Layout";
import NotFound from "./pages/NotFound";
import Loader from "./components/Loader";
import { ToastContainer, toast } from 'react-toastify';

// Lazy load components
const HomePage = lazy(() => import("./pages/HomePage"));
const ProductList = lazy(() => import("./pages/ProductList"));

function App() {
  return (
    <Suspense fallback={<div className="w-fit mx-auto mt-[250px] bg-transparent"><Loader/></div>}>
      <ToastContainer />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/product/:name" element={<ProductList />} />
          <Route path="/*" element={<NotFound />}></Route>
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
