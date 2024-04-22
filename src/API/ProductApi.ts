import { endpoint } from "./endpoint.ts";
import { handleHttpErrors } from "../fetchUtil";

interface product {
  id: number | null;
  name: string;
  weight: number;
  price: number;
}

async function getProducts(): Promise<Array<product>> {
  console.log("fetchMovies");
  const data = fetch(`${endpoint}/products`).then(handleHttpErrors);
  console.log(data);
  return data;
}

export type { product };
export { getProducts };
