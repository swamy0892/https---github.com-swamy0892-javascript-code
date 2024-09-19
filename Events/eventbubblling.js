const grandparent=document.getElementById("grandparent");
const parent=document.getElementById("parent");
const child=document.getElementById("child");

//arrow function
grandparent.addEventListener("click",(e)=>{
    console.log("grandparent");
}, {capture:true});

parent.addEventListener("click",(e)=>{
    e.stopPropagation();
console.log("parent");
},{capture:true});

child.addEventListener("click",(e)=>{
    e.stopPropagation();
    console.log("child");
},{capture:true});
