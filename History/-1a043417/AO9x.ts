function combine(input1: number | string | [], input2: number | string) {
  let result;
  if (typeof input1 === "number" && typeof input2 === "number") {
    result = input1 + input2;
  } else {
    result;
  }
  return result;
}

// arg1 can be number, string or boolean only. Also can be anoher types.
// arg2 can be array with strings or object only.
function example(arg1: number | string | boolean, arg2: string[] | {}) {
  // function body
}
