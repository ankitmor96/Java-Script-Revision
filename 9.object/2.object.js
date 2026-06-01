// create object using constructor :-

const Student = new Object();

((Student.name="ankit"),(Student.age="20"),(Student.grId="12060"));

console.log(Student);

console.log(typeof Student);

// create using function :-

function Students(name,age,id){(

    (this.name=name),(this.age=age),(this.id=id));

}

const Student1 = new Students ("ankit","20","101");

console.log(Student1);

// create using class :-

class student{
    constructor(name,age,id) {
        this.name=name;
        this.age=age;
        this.id=id;
    }
}

const student1 = new student("ankit","20","102");

console.log(student1);

// using destructing :-

const {name,}