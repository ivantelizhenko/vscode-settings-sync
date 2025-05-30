import alphabet from 'alphabet'

const {lower} = alphabet;
const string = 'abalaba labama'

const arr = string.split('')
let  output = '';
let argAlphabet = 0
let argString = 0

console.log(arr)
console.log(lower)


const id = setInterval(function(){

console.log(output + lower[argAlphabet])


  if(arr[argString] === lower[argAlphabet] || arr[argString] === ' ' ){
    output += arr[argString] !== ' ' ? lower[argAlphabet] : ' '
    argString++
    argAlphabet= 0
  } else{

    if(arr[argString]) argAlphabet++
  }


  
  if(!arr[argString] || !lower[argAlphabet]) clearInterval(id)
}, 10)


// console.log(output)
