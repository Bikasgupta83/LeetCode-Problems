// 1. Two Sum

var twoSum = function(nums, target){
    let have = new Map();
    for(let i=0;i<nums.length;i++){
        let substitution = target - nums[i];

        if(have.has(substitution)){
            return [have.get(substitution),i]
        }

        have.set(nums[i],i);
    }
};



console.log(twoSum([2,7,11,15],9)) //[ 0, 1 ]
console.log(twoSum([3,2,4],6));  //[ 1, 2 ]
console.log(twoSum([3,3],6)); // [ 0, 1 ]
console.log(twoSum([3,2,3],6))
