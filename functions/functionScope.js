/*function outer() {
    let outerVar = 'I am outside!';
    function inner() {
      let innerVar = 'I am inside!';
      console.log(outerVar); // Accessible
    }
   // console.log(innerVar); // Error: innerVar is not defined
  }
  //outer();
  */

  function f1(a){
    a();
  }
  f1(function(){
    console.log("i am anonymous function");
  })
  
  function greetings(){
    return function greet(){
      console.log("hello")
    }
  }
  var m=greetings();
  m();