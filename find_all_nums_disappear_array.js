// 448. Find All Numbers Disappeared in an Array


var findDisappearedNumbers = function(nums) {
    let result = [];

    for (let num of nums) {
        let index = Math.abs(num) - 1;

        if (nums[index] > 0) {
            nums[index] = -nums[index];
        }
    }

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 0) {
            result.push(i + 1);
        }
    }

    return result;
};


// console.log(findDisappearedNumbers([4,3,2,7,8,2,3,1])) //5 6
console.log(findDisappearedNumbers([1,1])) //2