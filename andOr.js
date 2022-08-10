
// && use
const a = 20;
const b = 20;
const c = -45;
function findMaxNum(num1, num2, num3) {

    if (num1 > num2 && num1 > num3) {
        console.log(num1, 'is the largest number');
    }
    else if (num2 > num1 && num2 > num3) {
        console.log(num2, 'is the largest number');
    }
    else if (num3 > num1 && num3 > num2) {
        console.log(num3, 'is the largest number');
    }
    else {
        console.log('There is no largest number');
    }
}
findMaxNum(a, b, c)
// // || use
// if ("a" || "A") {
//     console.log('first letter of alphabet;')
// }