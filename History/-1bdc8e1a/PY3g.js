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




  if(arr[argString] === lower[argAlphabet]){
    output += lower[argAlphabet] 
    argString++
    argAlphabet= 0
  } else{


    argAlphabet++
  }
  
  if(!arr[argString] ) clearInterval(id)
}, 10)


// console.log(output)
