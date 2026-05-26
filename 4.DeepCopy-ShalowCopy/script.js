// Deep copy :-

let student = "ankit";

let student2 = student;

console.log("student2 :",student2);

student2 ="kalpesh";

console.log("student2 :",student2);

console.log("student :",student);

// shalow copy :-

let employee = {name:"ankit"};

let employee2 = employee;

console.log("employee2 :",employee2);

employee2.name = "kalpesh";

console.log("employee2 :",employee2.name);

console.log("employee :",employee.name);
