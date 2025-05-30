export async function removeProductFromApi(data) {
  try {
    // TODO: error handler for empty data

    const res = await fetch("http://localhost:3000/products", {
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
