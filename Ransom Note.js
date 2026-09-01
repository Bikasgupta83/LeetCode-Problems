// 383. Ransom Note


var canConstruct = function (ransomNote, magazine) {
    let map = new Map();

    for (let char of magazine) {
        map.set(char, (map.get(char) || 0) + 1);
    }

    console.log(map);
    

    for(let char of ransomNote){
        map.set(char, (map.get(char) || 0) - 1);
    }

    console.log(map);

    for(let [keys,value] of map){
        if(value<0){
            return false;
        }
    }
    
    return true;
};

// console.log("1", canConstruct("a", "b")); 
// // false

// console.log("2", canConstruct("aa", "ab")); 
// // false

// console.log("3", canConstruct("aa", "aab")); 
// // true

// console.log("4", canConstruct("a", "a")); 
// // true

// console.log("5", canConstruct("abc", "abc")); 
// // true

// console.log("6", canConstruct("abc", "ab")); 
// // false

console.log("7", canConstruct("aabb", "aab"));
// false

// console.log("8", canConstruct("aabb", "aabb"));
// true

// console.log("9", canConstruct("aabb", "aabbb"));
// // true

// console.log("10", canConstruct("hello", "hello"));
// // true

// console.log("11", canConstruct("hello", "helo"));
// // false

// console.log("12", canConstruct("aaab", "aaabb"));
// // true

// console.log("13", canConstruct("aaab", "aabb"));
// // false

// console.log("14", canConstruct("abcabc", "aabbcc"));
// // true

// console.log("15", canConstruct("abcabc", "aabbc"));
// // false

// console.log("16", canConstruct("zzz", "zzzz"));
// // true

// console.log("17", canConstruct("zzzz", "zzz"));
// // false

// console.log("18", canConstruct("", "abc"));
// // true

// console.log("19", canConstruct("", ""));
// // true

// console.log("20", canConstruct("abc", ""));
// // false