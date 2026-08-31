// 283. Move Zeroes

var moveZeroes = function(nums) {
    let i = 0;
    let j = i + 1;

    while (i < nums.length && j < nums.length) {

        if (nums[i] !== 0) {
            i++;
            j = i + 1;
            continue;
        }

        if (nums[i] === 0 && nums[j] === 0) {
            j++;
            continue;
        }

        if (nums[i] === 0 && nums[j] !== 0) {
            [nums[i], nums[j]] = [nums[j], nums[i]];
            i++;
            j++;
        }
    }

    return nums;
};

console.log(moveZeroes([0, 1, 0, 3, 12]));
console.log(moveZeroes([0]));

