function calculate(operation){
    const num1=parseFloat(document.getElementById('num1').value);
    const num2=parseFloat(document.getElementById('num2').value);
    let result;
    switch(operation){
        case 'add':
            result=add(num1,num2);
            break;
        case 'subtract':
            result=subtract(num1,num2);
            break;
        case 'multiply':
            result=multiply(num1,num2);
            break;
        case 'divide':
            result=divide(num1,num2);
            break;
        case 'modulus':
            result=modulus(num1,num2);
            break;
        default:
            result='invalid operation';
    }
    //document.getElementById('result').innerText = 'Result: ${result}' ;
    document.getElementById('result').innerText = `Result: ${result}`;
}
function add(a,b){
    return a+b;
}
function subtract(a,b){
    return a-b;
}
function multiply(a,b){
    return a*b;
}
function divide(a,b){
    if(b===0){
        return 'error:division by zero';
    }
    return a/b;
}
function modulus(a,b){
    return a%b;
}