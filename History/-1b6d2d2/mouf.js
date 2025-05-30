import { useSelector } from "react-redux";

export async function setProducts() {
  try {
    const products = useSelector((state) => state.products.products);

    const res = await fetch("http://localhost:3000/products", method:Post);
    if (!res.ok) throw new Error("Fetch was failed");
    const data = await res.json();
    return data;
  } catch (err) {
    console.error("⛔️", err);
  }
}
