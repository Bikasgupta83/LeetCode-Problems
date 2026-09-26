// 238. Product of Array Except Self



// Time Complexcity -> O(n^2)

// var productExceptSelf = function(nums) {
//     let ans = new Array(nums.length).fill(1);

//     for (let i = 0; i < nums.length; i++) {
//         let product = 1;

//         for (let j = 0; j < nums.length; j++) {
//             if (j == i) {
//                 continue;
//             }

//             product *= nums[j];
//         }

//         ans[i] = Math.abs(product);
//     }

//     console.log(ans);
// };




const productExceptSelf = (nums) => {
    let ans = new Array(nums.length).fill(1);

    for (let i = 0; i < nums.length; i++) {
        let jProduct = 1;
        let kProduct = 1;

        let j = i - 1;
        while (j >= 0) {
            jProduct *= nums[j];
            j--;
        }

        let k = i + 1;
        while (k < nums.length) {
            kProduct *= nums[k];
            k++;
        }
        ans[i] = Math.abs(jProduct * kProduct);
    }
    console.log(ans);
}


productExceptSelf([1, 2, 3, 4]);  //[24,12,8,6]
productExceptSelf([-1,1,0,-3,3]); //[0,0,9,0,0]