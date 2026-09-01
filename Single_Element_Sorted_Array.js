// 540. Single Element in a Sorted Array


var singleNonDuplicate = function(nums) {
    let low = 0;
    let high = nums.length-1;

    while(low<=high){
        let mid = low + 1;

        if(nums[low]==nums[mid]){
            low = mid + 1;
        }else if(nums[low] !== nums[mid]){
            return nums[low];
        }else{
            high = mid - 1;
        }
    }
};

console.log(singleNonDuplicate([1,1,2,3,3,4,4,8,8]));
console.log(singleNonDuplicate([3,3,7,7,10,11,11]));
