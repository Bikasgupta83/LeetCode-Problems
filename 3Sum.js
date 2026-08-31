// 15. 3Sum - Brute Force + Remove Duplicates




// Brute Force Aprroach
var threeSum = function (nums) {
    let ans = [];
    let seen = new Set();

    nums.sort((a, b) => a - b); 

    for (let i = 0; i < nums.length - 2; i++) {
        for (let j = i + 1; j < nums.length - 1; j++) {
            for (let k = j + 1; k < nums.length; k++) {
                if (nums[i] + nums[j] + nums[k] === 0) {
                    let triplet = [nums[i], nums[j], nums[k]];
                    let key = triplet.join(",");

                    if (!seen.has(key)) {
                        seen.add(key);
                        ans.push(triplet);
                    }
                }
            }
        }
    }

    return ans;
};


// console.log(threeSum([-1, 0, 1, 2, -1, -4])); // [[-1, -1, 2], [-1, 0, 1]]
// console.log(threeSum([0, 0, 0])); // [[0, 0, 0]]




