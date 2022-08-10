function orLogicUse(letter) {
    let vowel = letter.toLowerCase();
    if (vowel === 'a' || vowel === 'e' || vowel === 'i' || vowel === 'o' || vowel === 'u') {
        console.log(letter, 'is vowel');
    }
    else {
        console.log(letter, 'is  consonant');
    }
}
orLogicUse('A');