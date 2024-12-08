  
/**
 * To run this file in Gitpod, use the 
 * command node map.js in the terminal
 */

// Using a for loop

let nums = [1, 2, 3, 4, 5, 6];
let result = [];
for (let num of nums) {
  result.push(num * 2);
}

console.log("First:", result);

// Using map()

const multiByTwo = function (num) {
  return num * 2;
}

const mapResult = nums.map(multiByTwo);
console.log("Second:", mapResult);


// Simplified w/ map()

const simMap = nums.map(function (num) { return num * 2; });

console.log("Third:", simMap);

// Simplfied w/ map() + arrow function

const simplified = nums.map(num => num * 2);

console.log("Fourth:", simplified);


// With objects:
const students = [
  {
    id: 1,
    name: 'Mark',
    profession: 'Developer',
    skill: 'JavaScript'
  },
  {
    id: 2,
    name: 'Ariel',
    profession: 'Developer',
    skill: 'HTML'
  },
  {
    id: 3,
    name: 'Jason',
    profession: 'Designer',
    skill: 'CSS'
  },
];

const id = students.map(student => ({ name: student.name, id: student.id, age: student.id === 1 ? 25 : student.id === 2 ? 30 : 35, }));
console.log(id);