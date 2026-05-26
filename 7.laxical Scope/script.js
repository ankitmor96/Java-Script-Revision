let name = "ankit"; // global scope

function showName(){
    console.log(name);
}

showName();

// example :-

function outer(){
    let city = "bhavnagar";

    function inner(){
        console.log(city);
    }
    inner();
}

outer();

