const url = '"https://api.nekosia.cat/api/v1/images/catgirl';

export async function getData() {
  try {
    const response = await fetch(url);
    const data = response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}
getData();
