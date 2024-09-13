const Employee = new Object({
    name:"John Doe",
    age:45,
    role:"SDE",
    'building no': "10-32/4D/D5"
    });
    console.log(Employee.age);
    console.log(Employee['name']); // accessing obj property via array notation
    console.log(Employee['building no']); // need to access via array notation we have space in property
    // console.log(Employee.building no); // error
    console.log(Employee.district); // accessing property that is not defined will give you undefined value
    