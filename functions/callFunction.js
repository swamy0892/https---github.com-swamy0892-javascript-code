var customer={
    name:"sai",
    address:"Eluru",
    details: function(){
        return this.name+"\t"+this.address
    }
}
console.log(customer.details());
var customer2={
    name:"ram",
    address:"hyd"
}
// access the detalis()-> method of customer(obj) in customer2(obj)
// console.log(customer2.details());

console.log(customer.details.call(customer2));