const maxSubarraySum = (nums,k) =>{
    let sum = 0;

    //first window
    for(let i=0;i<k;i++){
        sum += nums[i];
    }

    let max = sum;

    //sliding window
    for(let i=1;i<nums.length-k;i++){
        sum = sum-nums[i-1]+nums[i+k-1];

        if(sum > max){
            max = sum;
        }
    }
    console.log(max);
}

maxSubarraySum([3,8,2,5,7,6,12],3)