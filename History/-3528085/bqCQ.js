const url = '"https://api.nekosia.cat/api/v1/images/catgirl';

export async function getData() {
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error("Error");

    const { data } = await res.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}
getData();
