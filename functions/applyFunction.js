var emp= {
    name: "emp1",
    address: "hyd" ,
    getInfo: function(country,pincode,hno){
        return this.name+"\t"+this.address+"\t"+country+"\t"+pincode+"\t"+hno
    }
}
//console.log(emp.getInfo());
var emp2={
    name: "emp2",
    address: "delhi",
}
var arr = ["India",505001,"5-11"]
console.log(emp.getInfo.call(emp2, arr[0], arr[1], arr[2]));

//to reduce the above code like calling arr[0], arr[1],arr[2]. like calling arrya elements with index can be replaced by apply function 

console.log(emp.getInfo.apply(emp2,arr));
