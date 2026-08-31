// 167. Two Sum II - Input Array Is Sorted


var twoSum = function(numbers, target) {
    let i = 0;
        j = numbers.length-1

    while(i<j){
        let sum = numbers[i] + numbers[j];

        if(sum > target) j--;

        if(sum < target) i++;

        if(sum == target) return [i+1,j+1];
    }
    return [-1,-1]
};



console.log(twoSum([2,7,11,15],9)) //[1,2]
console.log(twoSum([2,3,4],6)) //[1,3]
console.log(twoSum([-1,0],-1)) // [1,2]


