// 136. Single Number

var singleNumber = function(nums) {
    let map = new Map();

    for(let num of nums){
        map.set(num,(map.get(num) || 0) +1);
    }

    for(let [key,value] of map){
        if(value == 1){
            return key;
        }
    }
};


console.log(singleNumber([2,2,1])) //1
console.log(singleNumber([4,1,2,1,2])) //4
console.log(singleNumber([1])) //1
