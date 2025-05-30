function getProducts() {
  try {
    const res = fetch("http://localhost:3000/products");
    if (!res.if) throw new Error("Fetch was failed");
    const data = res.json();
    console.log(data);
  } catch (err) {
    console.error("⛔️", err.message);
  }
}

console.log("hey");
getProducts();
