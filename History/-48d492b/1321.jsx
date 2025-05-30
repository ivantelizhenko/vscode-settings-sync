function Menu() {
  return <h1>Menu</h1>;
}

async function loader() {
  try {
    const res = fetch("");
  } catch {
    throw new Error("fatching failed");
  } finally {
    setIsLoading(false);
  }
}

export default Menu;
