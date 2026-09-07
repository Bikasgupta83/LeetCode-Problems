// 387. First Unique Character in a String

var firstUniqChar = function(s) {
    for(let i=0;i<s.length;i++){
        for(let j=i+1;j<s.length;j++){
            if(s[i] !== s[j]){
                return i;
            }
        }
    }
};

console.log(firstUniqChar("loveleetcode"))
//               i
//                        j 