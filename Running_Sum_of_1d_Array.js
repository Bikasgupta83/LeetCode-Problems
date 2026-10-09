// 1480. Running Sum of 1d Array


var runningSum = function(nums) {
    let result = new Array(nums.length).fill(undefined);

    for(let i=0;i<nums.length;i++){
        let j = 0;
        let sum = 0;

        while(j<=i){
            sum += nums[j];
            j++;
        }

        result[i] = sum;
    }

    console.log(result);
};


runningSum([1,2,3,4]);