// *Variables*
// Create a variable and console log the value
let newVar = 21
console.log(newVar)
// Create a variable, add 10 to it, and alert the value
let newVar1 = 15
newVar1 += 10
alert(newVar)
// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference
function subFourNum(n1,n2,n3,n4) {
    let result = n1 - n2 - n3 - n4
    alert(result)

}

// Create a function that divides one number by another and returns the remainder
function divideNums(num1,num2) {
    return(num1 % num2)
}

// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji
function addTwoNums(numA,numB){
    if(numA + numB > 50) {
        alert('Jumanji')
    }

}

// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA
function multiplyThree(nA,nB,nC){
    if( (nA * nB * nC) % 3 === 0) {
        alert('ZEBRA')
    }

}

//*Loops*
//Create a function that takes in a word and a number. Console log the word x times where x was the number passed in

function aWordAndNumber(num,word) {
    for( let i = 1; i <=num;i++){
        console.log(word)
    }

}