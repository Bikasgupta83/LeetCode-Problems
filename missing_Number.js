// 268. Missing Number

var missingNumber = function(nums) {
    //edge case
    let n = nums.length;
    if (!nums.includes(n)) {
        return n;
    }

    let sum = 0;
    let maxElement = 0;
    for(let num of nums){
        sum += num;
        if(num>maxElement){
            maxElement = num;
        }
    }
    
    let actualSum = 0;
    while(maxElement!==0){
        actualSum += maxElement;
        maxElement--;
    }

    return actualSum-sum;
};

console.log(missingNumber([9,6,4,2,3,5,7,0,1])) //8
console.log(missingNumber([3,0,1])) //2
console.log(missingNumber([0,1])) //2



const missing = (nums) =>{
    let n = nums.length;
    let actualSum = n*(n+1)/2;
    let sum = 0;
    for(let num of nums){
        sum += num;
    }
    return actualSum - sum;
}

console.log(missing([9,6,4,2,3,5,7,0,1])) //8
console.log(missing([3,0,1])) //2
console.log(missing([0,1])) //2