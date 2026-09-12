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





// Optimize 3Sum

const helper = (f,nums,res) =>{
    let i = f + 1;
        j = nums.length-1;

    while(i<j){
        let sum = nums[f] + nums[i] + nums[j];

        if(sum > 0){
            j--;
        }else if(sum < 0){
            i++;
        }else{
            res.push([nums[f],nums[i],nums[j]]);
            i++;
            j--;

            while(i<j && nums[i] === nums[i-1]){
                i++;
            }

            while(i<j && nums[j] === nums[j+1]){
                j--;
            }
        }
    }
}
const optimize3Sum = (nums)=>{
    nums.sort((a,b)=>a-b);

    let res = [];

    for(let f=0;f<nums.length;f++){
        if(nums[f] > 0){
            break;
        }

        if(f==0 || nums[f] !== nums[f-1]){
            helper(f,nums,res);
        }
    }

    return res;
}

console.log(optimize3Sum([-1, 0, 1, 2, -1, -4])); // [[-1, -1, 2], [-1, 0, 1]]
console.log(optimize3Sum([0, 0, 0])); // [[0, 0, 0]]