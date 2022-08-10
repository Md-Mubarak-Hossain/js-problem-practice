/*
১১. তিনটা সংখ্যার গুনফল বের করে ফাইনাল রেজাল্ট আউটপুট হিসেবে রিটার্ন করতে হবে। 
তুমি কি সেই কোড লিখতে পারবে। যদি পারো তাহলে সেই কোড লিখে ফেলো। 
.......................................................................
*/

function multiNum(num1, num2, num3) {
    let multi = num1 * num2 * num3;
    return multi;
}
let number1 = 5;
let number2 = 4;
let number3 = 6;
let result = multiNum(number1, number2, number3);
// console.log(result);

// ...............2nd way.....................
function mutiplicationNumber(numbers) {
    let multi = 1;
    for (let x of numbers) {
        multi *= x;
    }
    return multi;
}
let numberArray = [4, 5, 6];
let result2 = mutiplicationNumber(numberArray);
console.log(result2);

