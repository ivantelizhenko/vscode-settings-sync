export async function removeProductFromAPI(id) {
  try {
    const res = await fetch(`http://localhost:3000/products/${id}`, {
      method: "DELETE",
    });
    if (!res.ok) throw new Error("Deleting was failed");

    const newRes = await fetch(`http://localhost:3000/products/`);
    if (!newRes.ok) throw new Error("Error");
    const newData = await newRes.json();
  } catch (err) {
    console.error("⛔️", err);
  }
}
