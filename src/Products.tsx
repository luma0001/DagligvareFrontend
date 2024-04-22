import { useEffect, useState } from "react";
//import { useParams } from "react-router-dom";
import { getProducts, product as productInterface } from "./API/ProductApi.ts";

export default function Products() {
  const [products, setProducts] = useState<productInterface[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    getProducts()
      .then((res) => setProducts(res as productInterface[]))
      .catch(() => setError("No Products Found"));
  }, []);

  if (error !== "") {
    return <h2 style={{ color: "red" }}>{error}</h2>;
  }

  const productListItems = products.map((product) => (
    <li key={product.id} className="show-list-item">
      ID: {product.id}
      <h3>{product.name}</h3>
      <p>{product.price}</p>
      <p>{product.weight}</p>
    </li>
  ));

  return (
    <>
      <h2>All Products</h2>
      <ul>{productListItems}</ul>
    </>
  );
}
