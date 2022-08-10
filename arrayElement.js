/*
৯. তুমি কি একটা ফর লুপ দিয়ে কোন একটা array এর সবগুলা উপাদানকে দেখাতে পারবে। সেটা রেগুলার for লুপ হোক বা for of হোক। হলে সেই স্টাইলে একটা কোড লিখে ফেলো। 


*/


const number = [34, 78, 87, 65, 43, 2];

// 
for (let x of number) {
    // console.log(x);
}

for (let i = 0; i < number.length; i++) {
    let num = number[i];
    console.log(num);
}