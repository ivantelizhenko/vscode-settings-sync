async function asyncFunctionWithFetchAPI() {
  const res = await fetch('http://localhost:3000/examples');

  if (res.ok) throw new Error('Error');
}
asyncFunctionWithFetchAPI();
