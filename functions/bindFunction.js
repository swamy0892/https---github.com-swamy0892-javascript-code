var person = {
    firstName:"reddy",
    lastName: "swamy",
    fullName: function () {
      return this.firstName + " " + this.lastName;
    }
  }
  console.log(person.fullName());
  var member = {
    firstName:"reddy",
    lastName: "ram",
    fullName: function(){
        return this.firstName+" "+this.lastName;
    }
  }
  console.log(member.fullName());
   console.log(person.fullName.bind(member));