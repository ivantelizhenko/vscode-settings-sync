function hey(): never {
  throw new Error("error here");
}

hey();
