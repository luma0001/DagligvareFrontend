import { Route, Routes } from "react-router-dom";

import "./App.css";
import Layout from "./Layout";
import Products from "./Products";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="*" element={<h2>Not Found</h2>} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </Layout>
  );
}

export default App;
