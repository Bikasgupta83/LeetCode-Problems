// 125. Valid Palindrome

const valid_Palindrome = (sentence) => {
    let words = sentence
        .replace(/[^a-zA-Z0-9]/g, "")
        .toLowerCase();

    
    let i = 0;
    let j = words.length - 1;

    while (i < j) {
        if(words[i] === words[j]){
            i++;
            j--;
        }else{
            return false;
        }
    }

    return true;
};

console.log(valid_Palindrome("A man, a plan, a canal: Panama"));
console.log(valid_Palindrome("race a car"));
console.log(valid_Palindrome("0p"));
console.log(valid_Palindrome("ab_a"));





//  /[^a-zA-Z0-9]/g
//  / -> start and end points
//  [....] -> set of characters
//  ^ -> Not
//  a-z -> Lower Case
//  A-z -> Capital case
//  0-9 -> number from 0 to 9
//  g -> global