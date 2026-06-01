// create object using litetral synta :-

const Person ={
    name:"ankit",
    age:"20",
    grId:"12060"
};

console.log(Person);

console.log(typeof Person);

// accessing :-

console.log("person name :",Person.name);
console.log("person age :",Person.age);
console.log("person grId :",Person.grId);

// modifying :-

Person.name="kalpesh";
Person.age="21";
Person.grId="11689";
console.log( "modifying person :",Person);

// add :-

Person.Class="A";
console.log("add person details :", Person);

// delete :-

delete Person.age;
console.log("delete person age :",Person);



