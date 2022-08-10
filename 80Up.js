
/*
১০. তোমাকে যদি বলা হয়। একটা array এর মধ্যে ৮০ এর চাইতে বড় সংখ্যা থাকলে
 সেগুলাকে console log করে দেখাতে সেটা কি তুমি পারবে? তাহলে তুমি সেই কোড করে ফেলো 

*/
const number = [22, 123, 45, 67, 89, 09, 8, 7, 65, 84];
for (let x of number) {
    if (x < 80) {
        continue;
    }
    // console.log(x);
}
const number1 = [22, 123, 45, 67, 89, 09, 8, 7, 65, 84];
for (let x of number) {
    if (x > 80) {
        console.log(x);
    }
}


