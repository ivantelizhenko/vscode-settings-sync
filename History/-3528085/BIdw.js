const url =
  "https://the-fork-the-spoon.p.rapidapi.com/restaurants/get-info?id_restaurant=522995&locale=en_US";
const options = {
  method: "GET",
  headers: {
    "x-rapidapi-key": "Sign Up for Key",
    "x-rapidapi-host": "the-fork-the-spoon.p.rapidapi.com",
  },
};

export async function getData() {
  try {
    const response = await fetch(url, options);
    const result = await response.text();
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}
getData();
