// variable is a container store to value.

// first of Variable in three method in declaration 

// 1.var , 2.let , 3.const 


// global scope :- every were declare and access.

var a = 30;

console.log(a);


/* <-------------------------->*/

// 1. var - var is developed by ES6

// var is functional scope.

function car() {

    var a = 10;

    console.log(a);
}

car();

// var is redeclaration :-

var a;

a = 50;

console.log(a);

// var is reinitializetion :-

var a = 70;

a = 80;

console.log(a)

// console.log(a); var is outside not execute in functional scope


/* <-------------------------->*/


// 2.let - let is block scope

function Table(a, b) {
    let sum = a + b;

    if (sum <= 100) {
        console.log("sum is slallest number", sum);  // check perent scope
    }
}

Table(50, 40);

// let is not redeclaration :-

let f ;

// let f = 10;

console.log(f);

// but let is reinitializetion :-

let g = 30;

 g = 50;

console.log(g);


/* <-------------------------->*/


// 3.const :- const is block scope.

function PET(){
    const pets = "dog";
    

    if(pets !== "caw"){
        console.log("This pets is Labrador dog",pets); // check perent scope
    }
}

PET();

// const not redeclaretion :-

const y ;

y = 20;

// console.log(y);


// const not reinitializetion 

const  x = 10;

x = 20;
// console.log(x);

