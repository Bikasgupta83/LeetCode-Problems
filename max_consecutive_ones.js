// 485. Max Consecutive Ones

var findMaxConsecutiveOnes = function(nums) {
    let count = 0;
        max = 0;  

    for(let i=0;i<nums.length;i++){
        if(nums[i] === 1){

            count++;

            while(count > max){
                max = count;
            }
        }else{
            count = 0;
        }
    }

    console.log(max);
};

findMaxConsecutiveOnes([1,1,0,1,1,1,1,0])