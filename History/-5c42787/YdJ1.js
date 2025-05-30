export async function removeProductFromAPI(id) {
  try {
    // TODO: error handler for empty data

    console.log("i am here");
    const res = await fetch(`http://localhost:3000/products/${id}`, {
      method: "DELETE",
    });
    const data = await res.json();
    console.log(data);
    if (!res.ok) throw new Error("Deleting was failed");
  } catch (err) {
    console.error("⛔️", err);
  }
}
