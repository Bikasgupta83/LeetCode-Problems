// 179. Largest Number


var largestNumber = function(nums) {
    nums.sort((a, b) => {
        let x = String(a) + String(b);
        let y = String(b) + String(a);

        return y.localeCompare(x);
    });

    if (nums[0] === 0) {
        return "0";
    }

    return nums.join("");
};


largestNumber([3, 30, 34, 5, 9]);   //"9534330"
largestNumber([10, 2]);         // "210"
largestNumber([10, 2, 9, 39, 17]);         // "93921710"