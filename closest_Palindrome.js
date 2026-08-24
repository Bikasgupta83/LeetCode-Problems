// 564. Find the Closest Palindrome

const palindromeCheck = (n) => {
    n = n.toString();
    let i = 0;
    let j = n.length - 1;

    while (i < j) {
        if (n[i] === n[j]) {
            i++;
            j--;
        } else {
            return false;
        }
    }
    return true;
}


const closest_Palindrome = (n) => {

    let lower = n - 1;
    let upper = n + 1;

    while (true) {
        if (palindromeCheck(lower)) {
            return lower;
        }

        if (palindromeCheck(upper)) {
            return upper;
        }

        lower--;
        upper++;
    }
}

console.log(closest_Palindrome(123));
console.log(closest_Palindrome(121));
console.log(closest_Palindrome(1));
console.log(closest_Palindrome(10));
console.log(closest_Palindrome(99));
console.log(closest_Palindrome(100));
console.log(closest_Palindrome(1234));
console.log(closest_Palindrome(999));
console.log(closest_Palindrome(1000));
console.log(closest_Palindrome(12321));
