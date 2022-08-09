let num1 = 20;
let num2 = 0;
function calculatOperator(number1, number2) {
    // summation two nmbers
    let sum = number1 + number2;
    console.log('.............summation..............\n')
    console.log("sumation of two nujmbers=", sum);
    // subtraction two numbers
    console.log('\n..........Subtraction............');
    let subtract = number1 - number2;
    console.log("\n Subtraction of two numbers=", subtract);
    // multiplication two numbers
    let multi = number1 * number2;
    console.log('\n..........multiplication..........\n')
    console.log('multiplicationof two numbers=', multi);
    // divission two numbers
    console.log('\n..............divission...............\n')
    if (number2 !== 0) {
        let div = number1 / number2;
        console.log('\n divission of two numbers=', div);
    }
    else {
        console.log(number2, 'is a number which never can divided other number; the result is error!\n')
    }


}
calculatOperator(num1, num2);