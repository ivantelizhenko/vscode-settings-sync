import alphabet from 'alphabet'

const {lower} = alphabet;




let  output = '';
let argAlphabet = 0
let argString = 0

function writeSmth(phrase){
const arr = phrase.split('')

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
}

// writeSmth('write something')
writeSmth('only text')

