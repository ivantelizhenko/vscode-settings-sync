const url = '"https://api.nekosia.cat/api/v1/images/catgirl';

export async function getData() {
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("Error");

    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}
getData();
