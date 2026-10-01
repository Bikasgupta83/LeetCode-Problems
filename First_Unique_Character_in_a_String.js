// 387. First Unique Character in a String


var firstUniqChar = function(s) {
    let map = new Map();

    for(let ch of s){
        map.set(ch,(map.get(ch)||0)+1);
    }

    let idx = -1;
    for(let [key,value] of map){
        if(value === 1){
            idx = s.indexOf(key);
            break;
        }
    }

    console.log(idx)
};

firstUniqChar("leetcode")
firstUniqChar("loveleetcode")
firstUniqChar("aabb")
