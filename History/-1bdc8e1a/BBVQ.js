import alphabet from 'alphabet'

const {lower} = alphabet;
const string = 'abalabalabama'

const arr = string.split('')
let  output = [];
let argAlphabet = 0
let argString = 0




const id = setInterval(function(){
  // console.log(output+numbersArr[argAlphabet])
  console.log(numberStrToArr[argString] )
  console.log( numbersArr[argAlphabet])
  if(numberStrToArr[argString] === numbersArr[argAlphabet]){
    output.push( numbersArr[argAlphabet])
    argString++
    argAlphabet= -1;
  }

  console.log(output)
  argAlphabet++

) clearInterval(id)
}, 1000)


// console.log(output)
