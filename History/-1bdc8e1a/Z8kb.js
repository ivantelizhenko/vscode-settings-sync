import alphabet from 'alphabet'

const {lower} = alphabet;
const string = 'abalabalabama'

const arr = string.split('')
let  output = '';
let argAlphabet = 0
let argString = 0

console.log(arr)
console.log(lower)


const id = setInterval(function(){
  console.log(arr[argAlphabet])
  console.log(lower[argAlphabet])



}, 1000)


// console.log(output)
