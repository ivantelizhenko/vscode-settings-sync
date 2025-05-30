export async function removeProductFromAPI(id) {
  try {
    // TODO: error handler for empty data

    console.log("i am here");
    const res = await fetch(`http://localhost:3000/products/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    console.log(res);
    if (!res.ok) throw new Error("Deleting was failed");
  } catch (err) {
    console.error("⛔️", err);
  }
}
