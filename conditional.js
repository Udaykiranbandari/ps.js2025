// question -1
function findLargest (num1,num2,callback){
   return callback(num1,num2)+5
}
var result = findLargest(12,20,(num1,num2) => {
    if (num1>num2){
        return num1
    }
    else{
        return num2
    }
})
console.log(result)
// question-2
function calculate(num1,num2,callback){
return callback(num1,num2)*3
}
var res2 = calculate(10,5,(num1,num2)=>{
    if (num1>num2){
        return num1+num2
    }
    else if(num2>num1){
        return num2-num1
    }
    else{
        return 0
    }
})
console.log(res2)

// question-3

function checkEvenOdd(num,callback){
    return callback (num)
}
var res3 =checkEvenOdd(8, (num)=>{
    if (num%2 == 0){
        return "even"
    }
    else{
        return"odd"
    }
})
console.log(res3)
// question-4

function checkSign(num,callback){
    return callback (num)
}
var res4  = checkSign(-10,(num)=>{
    if (num>0){
        return "positive"
    }
    else if(num<0){
        return "Negative"
    }
    else{
        return 0
    }
})
console.log(res4)
// question-5

function multiplyConditionally(num1,num2,callback){
    return callback(num1,num2)*4
}
var res5 = multiplyConditionally(4,6,(num1,num2)=>{
    if(num1>num2){
        return num1*num2
    }
    else if (num2>num1){
        return (num1+num2)
    }
    else{
        return num1
    }
})
console.log(res5)