// 75. Sort Colors

var sortColors = function (nums) {
    let i = 0;
    let j = nums.length - 1;
    let k = 0;

    while (k <= j) {
        if (nums[k] == 1) { k++; }
        else if (nums[k] == 2) {
            [nums[j], nums[k]] = [nums[k], nums[j]]
            j--;
        }
        else {
            [nums[i], nums[k]] = [nums[k], nums[i]]
            i++;
            k++;
        }
    }

    return nums;
};


console.log(sortColors([2, 0, 2, 1, 1, 0]));
console.log(sortColors([1, 2, 0, 0, 1, 2, 2, 0, 1]));
console.log(sortColors([2, 0, 1]));
console.log(sortColors([2, 1, 2]));