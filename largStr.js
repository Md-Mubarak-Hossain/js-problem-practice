/*
৪. একটা ফাংশন লিখবে। এই ফাংশনের নাম হবে bestFriend 
তারপর সেই ফাংশনে ইনপুট প্যারামিটার হিসেবে একটা array নিবে। 
সেই array এর মধ্যে তোমার সব ফ্রেন্ডের নাম থাকবে। 
এখন তোমার কাজ হচ্ছে যে ফ্রেন্ড এর নাম সবচেয়ে বড় সেই ফ্রেন্ড এর নাম রিটার্ন করে দেয়া। 
এই ক্ষেত্রে তুমি নামটা অর্থাৎ ফ্রেন্ডের নাম (স্ট্রিং) রিটার্ন করতে হবে। 
*/
let names = ['Rajib', 'Sajib', 'Nahid', 'Bangla'];
function bestFriend(array) {
    let name = array[0];
    let firstNamelength = name.length;
    // console.log(firstNamelength);
    let largeFriendName;
    // console.log(array);
    // console.log(largeName);
    for (let i = 0; i < array.length; i++) {
        let nameAll = array[i];
        // console.log(nameAll);
        // let namelength = nameAll.length;
        // console.log(namelength);
        if (firstNamelength > nameAll.length) {
            largeFriendName = name;
            // console.log(largeFriendName);
        }
        else {
            largeFriendName = nameAll;
        }
    }
    console.log(largeFriendName);

}

bestFriend(names);