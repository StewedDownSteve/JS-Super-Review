// Create a function that takes in an array. If the first number, is less than the last number, alert "Hi". If the first number is greater than the last number, alert "Bye". If they are equal, alert "We close in an hour".

function takeInArr(newArr){
    if(newArr[0] < newArr[newArr.length - 1]){
        alert("hi")
    }else if(newArr[0] > newArr[newArr.length - 1]) {
        alert('Bye')
    }else{
        alert('We Close in an hour')
    }
    
}
takeInArr([1,2,3,4,5])