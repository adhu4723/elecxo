import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./layout/Layout";
import NotFound from "./pages/NotFound";
import Loader from "./components/Loader";

// Lazy load components
const HomePage = lazy(() => import("./pages/HomePage"));
const ProductList = lazy(() => import("./pages/ProductList"));

function App() {
  return (
    <Suspense fallback={<div className="w-fit mx-auto mt-[250px]"><Loader/></div>}>
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
