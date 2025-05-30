async function asyncFunctionWithFetchAPI() {
  const res = await fetch('http://localhost:3000/examples');

  console.log(res);
}
asyncFunctionWithFetchAPI();
