// Question-1
arr1 = [1,2,3,4,5]
console.log(arr1)

// Question-2
arr2 = [1,2,3,4,5]
console.log(arr2[2])

// Question-3
arr3 = [1,2,3,4,5]
arr3[1] = 6
console.log(arr3)

// Question-4

arr4 = [1,2,3,4,5]
function length(arr4){
    return arr4.length
}
console.log(length([1,2,3,4,5]))


// Question-5
arr5 = [1,2,3,4,5]
arr5.push(6)
// arr[5] = 6
console.log(arr5)

// Question-6
arr6 = [1,2,3,4,5,6]
arr6.pop();
console.log(arr6)

// Question-7
arr7 = [1,2,3,4,5]
for(var i = 0;i<=arr7.length;i++){
    console.log(arr7[i])
}

// Question-8
function checkValue(arr8,value){
    return value in arr8
}
console.log(checkValue([1,2,3,4,5],3))
console.log(checkValue([1,2,3,4,5],6))

// Question-9
arr9 = [1, 2, 3, 4, 5]
console.log("Original Array",arr9)
copied_arr9 = arr9.slice()
console.log("Copied Array:", copied_arr9)


// Question-10
arr10 = [1,2,3,4,5]
console.log(arr10.join(""))