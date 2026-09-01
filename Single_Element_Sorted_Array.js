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



console.log(singleNonDuplicate([1,1,2,3,3,4,4,8,8])); // 2
console.log(singleNonDuplicate([3,3,7,7,10,11,11])); // 10
console.log(singleNonDuplicate([1])); // 1
console.log(singleNonDuplicate([1,1,2])); // 2
console.log(singleNonDuplicate([1,2,2])); // 1
console.log(singleNonDuplicate([1,1,2,2,3])); // 3
console.log(singleNonDuplicate([1,2,2,3,3])); // 1
console.log(singleNonDuplicate([1,1,2,2,3,3,4])); // 4
console.log(singleNonDuplicate([1,1,2,2,3,3,4,4,5])); // 5
console.log(singleNonDuplicate([-5,-5,-2,-2,0,1,1])); // 0










//     let low = 0;
//     let high = nums.length - 1;

//     while (low < high) {
//         let mid = Math.floor((low + high) / 2);

//         // Make mid even
//         if (mid % 2 === 1) {
//             mid--;
//         }

//         if (nums[mid] === nums[mid + 1]) {
//             // Pair is correct, single is on the right
//             low = mid + 2;
//         } else {
//             // Pair is broken, single is on the left
//             high = mid;
//         }
//     }

//     return nums[low];
// };
