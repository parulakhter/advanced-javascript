//Why/ How can we get undefined: 
let name;
console.log(name);

function add(num1, num2){
    console.log(num1 + num2);
}

const result = add(15, 20);
console.log(result);


function add(num1, num2){
    console.log(num1 + num2);
    return
}

const result = add(15, 20);
console.log(result);


function add(num1, num2){
    console.log(num2);
}

const result = add(15);
console.log(result);

const student = {name: 'Hayat', phone: 456123}
console.log(student.address);
let fun = undefined;
console.log(fun);

let ages = [2, 3, 5];
console.log(ages[11]);
