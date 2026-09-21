// 169. Majority Element


var majorityElement = function(nums) {
    let map = new Map();

    for(let num of nums){
        map.set(num,(map.get(num)||0)+1)
    }

    let maxValue = 0;
    let maxKey = 0;
    for(let [key,value] of map){
        if(value > maxValue){
            maxValue = value;
            maxKey = key;
        }
    }
    console.log(maxKey);
};

majorityElement([2,2,1,1,1,2,2]);