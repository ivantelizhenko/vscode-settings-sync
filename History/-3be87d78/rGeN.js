export async function getProducts() {
  try {
    const res = fetch("http://localhost:3000/products");
  } catch (err) {
    console.error("⛔️", err.message);
  }
}
