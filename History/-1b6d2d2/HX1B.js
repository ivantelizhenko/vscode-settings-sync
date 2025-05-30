import { useSelector } from "react-redux";

export async function setProducts() {
  try {
    const products = useSelector((state) => state.products.products);

    const res = await fetch("http://localhost:3000/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: 1,
        imageUrl: "some url here",
        name: "Product name",
        count: 4,
        size: {
          width: 200,
          height: 200,
        },
        weight: "200g",
        comments: ["CommentModel", "CommentModel"],
      }),
    });

    console.log(res);
    if (!res.ok) throw new Error("Sending was failed");
  } catch (err) {
    console.error("⛔️", err);
  }
}
