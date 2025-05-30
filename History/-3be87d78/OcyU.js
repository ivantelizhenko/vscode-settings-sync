function getProducts() {
  try {
    const res = fetch("http://localhost:3000");
    if (!res.ok) throw new Error("Fetch was failed");
    const data = res.json();
    console.log(data);
  } catch (err) {
    console.error("⛔️", err);
  }
}

console.log("hey");
getProducts();
