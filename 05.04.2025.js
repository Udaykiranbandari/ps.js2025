// spread operaters
const fruits = ['apple', 'banana', 'cherry'];

const moreFruits = [...fruits]; 
console.log(moreFruits); 

const first = [1, 2, 3];
const second = [4, 5, 6];
const merged = [...first, ...second];
console.log(merged);


const user = { name: 'Alice', age: 25 };
const updatedUser = { ...user, age: 26, city: 'Paris' };
console.log(updatedUser);


// rest operater

function sum(...numbers) {
    return numbers.reduce((acc, curr) => acc + curr, 0);
  }
  
  console.log(sum(1, 2, 3, 4)); 


const [first1, second2, ...rest] = [10, 20, 30, 40, 50];
console.log(first1);  
console.log(second2); 
console.log(rest);   

  
const { name1, ...details } = { name: 'John', age: 30, city: 'New York' };
console.log(name1);    
console.log(details); 

