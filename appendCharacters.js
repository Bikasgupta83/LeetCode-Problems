// 2486. Append Characters to String to Make Subsequence

var appendCharacters = function(s, t) {
    let i = 0;
    let j = 0;

    while(i!==s.length && j!==t.length){
        if(s[i] == t[j]){
            j++;
        }
        i++;
    }
    console.log(t.length-j);
};

appendCharacters("coaching","coding") // 4
appendCharacters("abcde","a")   // 0
appendCharacters("z","abcde")  // 5