import styled from "styled-components";
import Product from "./Product";

const Container = styled.div`
  padding: 3.6rem;
  width: 75%;
  background: papayawhip;
  box-shadow: 0 0 2rem rgba(0, 0, 0, 0.2);
  height: 75%;
  overflow: scroll;
`;

const faceRecipes = [
  {
    id: 1,
    imageUrl: "some url here",
    name: "Product name 1",
    count: 4,
    size: {
      width: 50,
      height: 50,
    },
    weight: "1000g",
    comments: ["CommentModel", "CommentModel"],
  },
  {
    id: 2,
    imageUrl: "some url here",
    name: "Product name 2",
    count: 1,
    size: {
      width: 200,
      height: 200,
    },
    weight: "200g",
    comments: ["CommentModel", "CommentModel"],
  },
  {
    id: 3,
    imageUrl: "some url here",
    name: "Product name 3",
    count: 4,
    size: {
      width: 200,
      height: 200,
    },
    weight: "200g",
    comments: ["CommentModel", "CommentModel"],
  },
];

function onAddHandler() {
  console.log("i add");
}

function onDeleteHandler() {
  console.log("i delete");
}

function onEditHandler() {
  console.log("i edit");
}

function onClick(e) {
  const btn = e.target.closest(".btn");

  const typeButton = btn.className.split(" ").at(-1).trim();
  console.log(typeButton);
  if (!btn) return;

  switch (typeButton) {
    case "add": {
      onAddHandler();
    }
    case "delete": {
      onDeleteHandler();
    }
    case "edit": {
      onEditHandler();
    }
  }
  onAddHandler();
}

function ProductsList() {
  return (
    <Container onClick={onClick}>
      <ul>
        {faceRecipes.map((data) => (
          <Product product={data} key={data.id} />
        ))}
      </ul>
    </Container>
  );
}

export default ProductsList;
