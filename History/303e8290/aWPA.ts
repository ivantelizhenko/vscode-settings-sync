export async function getUsers() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  console.log(res);
}
