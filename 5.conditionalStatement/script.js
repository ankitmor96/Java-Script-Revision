// if :-

let a = 15;

if (a <= 18) {
    console.log("you are not aligible for vote");
}

// if-else :-

let age = 19;

if (age <= 18) {
    console.log("you are not aligible for vote");
} else {
    console.log("you are aligible for vote");
}

// else-if :-

let mark = 47;

if (mark >= 80) {
    console.log("your gread is a");
} else if (mark >= 70) {
    console.log("your grade is b");
} else if (mark >= 60) {
    console.log("your grade is c");
} else if (mark >= 45) {
    console.log("your grade is d");
} else if (mark >= 33) {
    console.log("your grade is e");
}
else {
    console.log("you are failed");
}

// switch case :-

let marks = 50;

switch (true) {

    case marks >= 80:
        console.log("your grade is a");
        break;

    case marks >= 60:
        console.log("your grade is b");
        break;

    case marks >= 50:
        console.log("your grade is c");
        break;

    case marks >= 33:
        console.log("your grade is d");
        break;

    default:
        console.log("you are failed");
}

