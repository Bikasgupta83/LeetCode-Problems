// 242. Valid Anagram



var isAnagram = function (s, t) {

    if (s.length !== t.length) {
        return false;
    }

    let map = new Map();

    for (let ch of t) {
        map.set(ch, (map.get(ch) || 0) + 1);
    }

    for (let ch of s) {
        map.set(ch, (map.get(ch) || 0) - 1);
    }

    for (let value of map.values()) {
        if (value !== 0) {
            return false;
        }
    }
    return true;
};

console.log(isAnagram("anagram", "nagaram"))
console.log(isAnagram("rat", "car"))