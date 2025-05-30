function withThrow(): never {
  throw new Error("error here");
}

function withWhile(): never {
  while (true) {}
}

console.log(withThrow, withWhile);
