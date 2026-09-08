// 49. Group Anagrams


//using map
var groupAnagrams = function(strs) {
    let map = new Map();

    for(let word of strs){
        let reverse = word.split("").sort().join("");
        
        if(map.has(reverse)){
            map.get(reverse).push(word);
        }else{
            map.set(reverse,[word]);
        }
    }

    console.log([...map.values()])
};

groupAnagrams(["eat","tea","tan","ate","nat","bat"]);