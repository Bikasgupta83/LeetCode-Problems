// LeetCode 11 - Container With Most Water

// Brute Force Approach - Time Complexcity O(n^2)

var maxArea = function(height) {
    let maxWater = 0;

    for (let i = 0; i < height.length; i++) {

        for (let j = i + 1; j < height.length; j++) {

            let width = j - i;
            let ht = Math.min(height[i], height[j]);

            let area = width * ht;

            maxWater = Math.max(maxWater, area);
        }
    }

    return maxWater;
};

// console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])); //49
// console.log(maxArea([1,1])); // 1





// Two Pointer Approach - Time complexcity O(n)
const maxWater = (arr) =>{
    let left = 0;
    let right = arr.length-1;
    let maxArea = 0;

    while(left <= right){
        let width = right-left;
        let height = Math.min(arr[left],arr[right]);
        let area = width*height;
        maxArea = Math.max(maxArea,area);

        arr[left]<arr[right]?left++:right--;
    }
    return maxArea;
}

console.log(maxWater([1, 8, 6, 2, 5, 4, 8, 3, 7])); //49
console.log(maxWater([1,1])); // 1