async function getCountries() {
  const res = await fetch('http://localhost:3000/countries');

  if (!res.ok) throw new Error('Problem with fetching countries');

  console.log(res);
  const data = await res.json();

  console.log(data);
}
