/*
৮. তোমাকে যদি বলা হয় তুমি একটা array ডিক্লেয়ার করবে। এবং সেটার মধ্যে কয়টা উপাদান আছে সেটা বের করবে হবে। সেই array এর এর মধ্যে চতুর্থ পজিশন এর উপাদান চেইঞ্জ করতে হবে। array এর মধ্যে দুইটা উপাদান যোগ করতে হবে। এবং একটা উপাদান কে বের করে দিতে হবে। তুমি কি সেটা করতে পারবে। 

*/
// array declare
let number = [12, 34, 56, 78, 9, 0, 9, 8];
// console.log(number);

// array total element/array length
let length = number.length;
// console.log(length);

//4th position element change
number[3] = 87;
// console.log(number);

// 2 elements add to the array
number.splice(4, 0, 44, 33);
// console.log(number);

//1 element remove
number.pop();
// console.log(number);
