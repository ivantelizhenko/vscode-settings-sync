export async function getUsers() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');

  if (!res.ok) throw Error('Failed getting users');
  console.log(res);
}
