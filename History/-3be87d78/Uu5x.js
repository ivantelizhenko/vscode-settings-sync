export async function getProducts() {
  try {
    const res = await fetch("http://localhost:3000/products");
    if (!res.if) throw new Error("Fetch was failed");
    const data = await res.json();
    console.log(data);
  } catch (err) {
    console.error("⛔️", err.message);
  }
}

getProducts();
