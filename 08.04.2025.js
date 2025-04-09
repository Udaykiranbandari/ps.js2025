// array methods
let fruits = ["apple", "banana"];
fruits.push("orange");
console.log(fruits); 
// ["apple", "banana", "orange"]


let numbers = [1, 2];
numbers.push(3, 4);
console.log(numbers);
 // [1, 2, 3, 4]


 let animals = ["cat", "dog", "bird"];
animals.pop();
console.log(animals); 
// ["cat", "dog"]


let nums = [10, 20, 30];
let last = nums.pop();
console.log(last); 
// 30


let numbers1 = [1, 2, 3];
let squares = numbers1.map(n => n * n);
console.log(squares); 
// [1, 4, 9]


let names = ["alice", "bob"];
let upper = names.map(name => name.toUpperCase());
console.log(upper); 
// ["ALICE", "BOB"]


let nums1 = [1, 2, 3, 4];
let even = nums1.filter(n => n % 2 === 0);
console.log(even);
 // [2, 4]


 let scores = [55, 70, 85];
let passed = scores.filter(score => score >= 60);
console.log(passed);
 // [70, 85]



 let nums2 = [4, 5, 6];
let found = nums2.find(n => n > 4);
console.log(found);
 // 5


 let chars = ["a", "b", "c"];
let result = chars.find(ch => ch === "b");
console.log(result);
 // "b"


 