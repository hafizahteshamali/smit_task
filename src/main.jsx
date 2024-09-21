import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductList from "./components/Product/ProductList.jsx";
import ProductDetails from "./components/ProductDetails/ProductDetails.jsx";
import Error from "./components/Error/Error.jsx";
import "bootstrap/dist/css/bootstrap.min.css";


createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<ProductList />} />
      <Route path="/product/:id" element={<ProductDetails />} />
      <Route path="*" element={<Error />} />
    </Routes>
  </BrowserRouter>
);
