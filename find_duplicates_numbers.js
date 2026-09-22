// 287. Find the Duplicate Number


var findDuplicate = function(nums) {
    let have = new Map();

    for(let num of nums){
        have.set(num,(have.get(num) || 0)+1);
    }

    for(let [key,value] of have){
        if(value > 1){
            return key;
        }
    }
};


console.log(findDuplicate([1,3,4,2,2])) //2
console.log(findDuplicate([3,1,3,4,2])) //3
console.log(findDuplicate([3,3,3,3,3])) //3

