// 217. Contains Duplicate

var containsDuplicate = function(nums) {
    let map = new Map();
    let duplicate = false;

    for(let num of nums){
        map.set(num,(map.get(num) || 0) + 1)
    }

    for(let [key,value] of map){
        if(value > 1){
            duplicate = true;
        }
    }
    return duplicate;
};

console.log(containsDuplicate([1,2,3,1])); //true
console.log(containsDuplicate([1,2,3,4])); //false
console.log(containsDuplicate([1,1,1,3,3,4,3,2,4,2])); //true