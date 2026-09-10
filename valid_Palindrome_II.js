// 680. Valid Palindrome II


const palindrome_Helper = (i,j,s) =>{
    while(i<j){
        if(s[i] !== s[j]){
            return false;
        }
        i++;
        j--;
    }
    return true;
}

var validPalindrome = function(s) {
    let i = 0
        j = s.length-1;
    
    while(i<j){
        if(s[i] !== s[j]){
            return palindrome_Helper(i+1,j,s) || palindrome_Helper(i,j-1,s);
        }else{
            i++;
            j--;    
        }
    }
};

console.log(validPalindrome("abbxa"));
console.log(validPalindrome("abcda"));
