const num1 = "23";
const num2 = 40;

if (num1 > num2 && typeof num1 === 'number' && typeof num2 === 'number') {
    console.log(num1, 'is greater than ', num2);
}

else if (num1 < num2 && typeof num1 === 'number' && typeof num2 === 'number') {
    console.log(num1, 'is less than ', num2);
}
else if (num1 === num2) {
    console.log(num1, ' is equal to ', num2);
}
else if (num1 !== num2) {
    console.log(num1, ' is not equal to ', num2);
}
else if (num1 >= num2) {
    console.log(num1, ' is greater than or equal to ', num2);
}
else if (num1 <= num2) {
    console.log(num1, ' is less than or equal to ', num2);
}
else {
    console.log(num1, num2, 'is not  number');
}
