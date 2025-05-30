import { useSelector } from "react-redux";

export async function setProducts(data) {
  try {
    const res = await fetch("http://localhost:3000/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    console.log(res);
    if (!res.ok) throw new Error("Sending was failed");
  } catch (err) {
    console.error("⛔️", err);
  }
}
