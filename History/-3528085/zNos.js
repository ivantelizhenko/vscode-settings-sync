const url = "http://openlibrary.org/subjects/love.json?published_in=1500-1600";

async function getData() {
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error("Error");

    const data = await res.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

export { getData };
