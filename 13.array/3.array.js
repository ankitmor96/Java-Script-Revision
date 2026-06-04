// add to last element :-

// 1

// const people = ["mans","womans","child"];

// people.push("young");
// console.log(people);

// 2

// const fruits = ["mango","banana","apple"];

// fruits.push("charry");
// console.log(fruits);

// pus :-

const subject = ["maths","gujarati","english"];

subject.push("account"); // 1
console.log(subject);

// push manuallu :-

let length = 0;

for(let key of subject){ // 2
    length++;
}
console.log(length);

for(i=length+1; i<=subject.length ; i++){
    subject[i] = subject[i+1]
}

subject[4] ="constitusion";

console.log(subject);



// pop :- 

const language = ["PHP","java script","React","Node.js"];

language.push("Python"); // 1
console.log(language);

// pop manually :-

const student = ["name","age","grId","email"];

student.pop();

console.log(student);

let length = 0;

for (let key of student){  // 2
    length ++;
}

console.log(length);

student.length = length-1;

console.log(student);

//  unshift  :-

const car = ["BMW","Tesla","Swift"];

car.unshift("Aulto");  // 1
console.log(car);

// unshift manually :-

let length = 0;

for(let items of car){
    length++;
}

console.log(length);

for(i=length -1; i >=0; i--){  // 2
  car[i+1] = car[i]
}
car[0] = "odi";

console.log(car);

// shift:-

const fruits =  ["apple","mango","banana"];

fruits.shift();

console.log(fruits);

// shift manually :-

let length = 0;

for(let items of fruits){
    length++;
}

console.log(length);

for(let i = 0; i < fruits.length - 1; i++){
    fruits[i] = fruits[i + 1];
}

fruits.length--;

console.log(fruits);




