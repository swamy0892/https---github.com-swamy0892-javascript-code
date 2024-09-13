const Employee= new Object({
    name:"Azmath",
    age:24,
    role:"developer"
    });
    // accessing property of an object via dot notation
    console.log(Employee.name);
    // accessing property of an object via array notation
    console.log(Employee['age']);
    const Address= new Object({
    street:"XYZ street",
    colony:"Rg road ",
    'building no': "Ag apartments"
    });
    console.log(Address['building no']); // accessing via array notation bucz it contains space between the 'building no'
    console.log(Employee.state); // accesing the property that is not definedfor an object will give u undefined value
    console.log(Employee);
    Employee.name="Vinay"; // replace the vale of a property
    console.log(Employee);
    // accesing the property that is not defined for an object will give u undefined value
    console.log(Employee.state);
    // adding a new property to an existing object
    Employee.state="Telangana";
    console.log(Employee.state);
    // deleting a property of an object
    delete Employee.state;
    console.log(Employee.state);
    // check whether teh property exists for an object or not -> it returns boolean values
    console.log('state' in Employee); // flase - > does not exists
    console.log('name' in Employee); // true ->exits
    console.log(Employee);