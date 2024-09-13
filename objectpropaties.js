// methods of defining an object

//1. with object literal
const person = {
    // add properties
    firstName:"Rashmi",
    lastName:"Hassin",
    age:30,
    78:"fair"
    }
    console.log(person[78]);

    // 2. with new keyword
    const Employee = new Object({
    name:"John Doe",
    age:45,
    role:"SDE"
    });
    console.log(Employee.age);
    