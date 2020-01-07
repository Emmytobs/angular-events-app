// // Array.slice practice
// // const arr = ['One','Two,','Three'];

// // // let arrClone = [];
// // let arrClone = arr.slice(0);

// // console.log(arrClone)

const arr = [4,2,7,8,9,1,0];

arr.sort(sortArr);

function sortArr(num1, num2) {
  // If num1 is greater than num2, the result will yield a positive number (indicated as 1), so it sorts in an ascending order. Otherwise (if num2 is greater than num1), it sorts in descending order
  return num1 - num2
}
console.log(arr) // Sorts in ascending order

// How Sorting works for array of objects

// If the first parameter is greater than the second parameter and 1 is returned, it is sorting in an ascending order.
// If the first parameter is lesser than the second parameter and 1 is returned, it is sorting in an descending order

const obj = [
  {name: 'John', age: 12},
  {name: 'David', age: 14},
  {name: 'Joanne', age: 19},
  {name: 'Carlos', age: 10},
]

obj.sort(sortObj)

function sortObj (obj1, obj2) {
  if (obj1.name > obj2.name) return 1;
  else if (obj1.name === obj2.name) return 0;
  else return -1;
}
console.log(obj) // Sorts in ascending order


// const name1 = 'Aba'
// const name2 = 'Abc'

// if (name1 > name2)
//   console.log('True');
// else
//   console.log('False')


/*
  Getters and Setters
*/

class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  fullName() {
    return this.name + ' ' + this.age;
  }

  set getAge(val) {
    this.age = this.age === val ? 'Match' : 'No match';
  }

  set getAge2(val) {
    this.age = val ? 'Match' : 'No match';
  }

}

const userObj = new User('Emmanuel Otobo', 0);
const userObj2 = new User('Emmanuel Otobo', 0);

userObj.getAge = 0;
console.log(userObj.age);

userObj2.getAge2 = 0;
console.log(userObj2.age);

// console.log(userObj.age); // 17
// userObj.getAge = 17; // Changes the age to the string "Match"
// console.log(userObj.age); // Match

/*
The "some" array method
*/

const arr1 = [1,2,3,4,5];
const evenNums = [0,2,4,6];

console.log(arr1.some(num => evenNums[1] == num)); // true
console.log(arr1.some(num => evenNums[0] == num)); // false

