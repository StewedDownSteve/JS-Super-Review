//---Easy
//create a function that subtracts two numbers and alerts the difference
function subTwoNums(num1,num2){
    alert(num1 + num2)
}



//create a function that divides three numbers and console logs the quotient

function divideThreeNums(n1a,n2a,n3a) {
    let result = n1a / n2a / n3a
    console.log(result);
}

//create a function that multiplys three numbers and returns the product
function multThreeNums(numA,numB,NumC) {
    let result1 = (numA * numB * NumC)
    return result1;
}


//---Medium
//create a function that takes in three numbers. Add the first two numbers and return the remainder of dividing the sum of the first two numbers by the third number

function takeThreeNums(N1,N2,N3) {
    let resultA = ((N1 + N2) % N3)
    return resultA;
}

//---Hard
//create a function that takes in 4 numbers. Multiply the first two numbers. If the product is greater than 100 add the sum of the last two numbers and console log the value. If the product is less that 100, subtract the difference of the last two numbers and console log the value. If the product is 100, multiply the first three numbers together and alert the remainder of dividing the fourth number
function takeFourNums(n1,n2,n3,n4) {
    let result = (n1 * n2)
    if (result > 100) {
        console.log(result + n3 + n4)
    }else if (result < 100) {
        console.log(result - n3 - n4)
    }else {
        alert( (n1 * n2 * n3) % n4 )
    }
}