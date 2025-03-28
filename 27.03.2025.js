
// task-1
const person = { 
    name: "John Doe", 
    age: 30, 
    address: { 
    city: "New York", 
    country: "USA" 
    }, 
    hobbies: ["Reading", "Traveling"] 
};

let {name : fullName, age, address:{city, country = "Unknown"},hobbies} = person;
console.log(fullName, age, city);
let [x,,] = hobbies;
firstHobby=x;
console.log(firstHobby);


// task-2
const fruits = ["Apple", "Banana", "Mango", "Orange", "Pineapple"];
let [a,b,...rest] = fruits;
[a,b]=[b,a];
console.log(a,b);

// task-3

function sumNumbers(...a){
    return a.reduce( (sum,next) => sum+next );
}
console.log(sumNumbers(1, 2, 3, 4)); 
console.log(sumNumbers(10, 20, 30));

// task-4
const user = { name: "Alice", age: 25 }; 
const job = { title: "Developer", company: "TechCorp" };
let userProfile = {...user, ...job, experience : "2 years"};
console.log(userProfile);

// task-5
const numbers = [1, 2, 3, 4, 5];
let arr = [...numbers];
arr.unshift(0);
arr.push(6);
console.log( arr);