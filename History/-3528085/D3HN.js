const url = '"https://api.nekosia.cat/api/v1/images/catgirl';

export async function getData() {
  try {
    const response = await fetch(url);
    const result = await response.text();
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}
getData();
