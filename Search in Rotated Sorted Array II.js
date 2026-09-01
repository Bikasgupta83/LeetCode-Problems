// 81. Search in Rotated Sorted Array II

var search = function(nums, target) {
    let left = 0;
    let right = nums.length-1;

    while(left <= right){
        let mid = Math.floor((left+right)/2);

        if(nums[mid] === target){
            return true;
        }else if(nums[mid]<target){
            // right=mid-1;
            left = mid+1;
        }else{
            // left = mid+1;
            right=mid-1;
        }
    }
    return false;
};  


console.log("1", search([2, 5, 6, 0, 0, 1, 2], 0)); // true
console.log("2", search([2, 5, 6, 0, 0, 1, 2], 3)); // false
console.log("3", search([1], 1)); // true
console.log("4", search([1], 0)); // false

console.log("5", search([4, 5, 6, 7, 0, 1, 2], 4)); // true
console.log("6", search([4, 5, 6, 7, 0, 1, 2], 2)); // true
console.log("7", search([4, 5, 6, 7, 0, 1, 2], 7)); // true
console.log("8", search([4, 5, 6, 7, 0, 1, 2], 3)); // false

console.log("9", search([1, 1, 1, 1, 1], 1)); // true
console.log("10", search([1, 1, 1, 1, 1], 2)); // false
console.log("11", search([1, 1, 2, 2, 3, 3, 4], 3)); // true
console.log("12", search([1, 1, 2, 2, 3, 3, 4], 5)); // false

console.log("13", search([1, 0, 1, 1, 1], 0)); // true
console.log("14", search([1, 0, 1, 1, 1], 2)); // false
console.log("15", search([1, 1, 1, 0, 1], 0)); // true
console.log("16", search([1, 1, 1, 0, 1], 2)); // false

console.log("17", search([2, 2, 2, 0, 1, 2], 0)); // true
console.log("18", search([2, 2, 2, 0, 1, 2], 1)); // true
console.log("19", search([2, 2, 2, 0, 1, 2], 3)); // false

console.log("20", search([3, 3, 4, 0, 0, 1, 2, 3], 0)); // true
console.log("21", search([3, 3, 4, 0, 0, 1, 2, 3], 5)); // false

console.log("22", search([5, 1, 2, 3, 4, 5], 5)); // true
console.log("23", search([5, 1, 2, 3, 4, 5], 1)); // true
console.log("24", search([5, 1, 2, 3, 4, 5], 4)); // true
console.log("25", search([5, 1, 2, 3, 4, 5], 6)); // false

console.log("26", search([1, 1, 2, 2, 3, 3, 4, 4], 4)); // true
console.log("27", search([1, 1, 2, 2, 3, 3, 4, 4], 5)); // false

console.log("28", search([-5, -4, -4, -2, 0, 1, -5], -2)); // true
console.log("29", search([-5, -4, -4, -2, 0, 1, -5], 2)); // false