import alphabet from 'alphabet'

const {lower} = alphabet;
const string = 'abalabalabama'

const arr = string.split('')
let  output = [];
let argAlphabet = 0
let argString = 0

const numbersArr = [0,1,2,3,4,5,6,7,8,9]
const numbersArr2 = [0,1,2,3,4,5,6,7,8,9]
const numberStr = 102735481029274;

const numberStrToArr =String(numberStr).split('').map(number=> +number)
console.log(numberStrToArr)
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

  if(numberStrToArr === numberStr) clearInterval(id)
}, 1000)


// console.log(output)
