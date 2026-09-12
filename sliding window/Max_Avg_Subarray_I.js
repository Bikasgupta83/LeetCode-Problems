// 643. Maximum Average Subarray I


var findMaxAverage = function (nums, k) {
    let sum = 0;

    // first Window
    for(let i=0;i<k;i++){
        sum += nums[i];
    }

    let max = sum;

    //sliding window
    for(let i=k;i<nums.length;i++){
        sum = sum-nums[i-k]+nums[i];
        max = Math.max(max,sum);
    }

    console.log(max/k);

};
findMaxAverage([1, 12, -5, -6, 50, 3], 4);
findMaxAverage([5], 1);
findMaxAverage([4, 0, 4, 3, 3], 5);
findMaxAverage([0,1,1,3,3],4);