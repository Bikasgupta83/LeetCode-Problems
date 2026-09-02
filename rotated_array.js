// 189. Rotate Array


//TLE
var rotate = function (nums, k) {

    for (let i = 0; i < k; i++) {
        let lastElements = nums.pop();
        nums.unshift(lastElements);
    }
    console.log(nums);

};

// rotate([1,2,3,4,5],2)  //[ 4, 5, 1, 2, 3 ]
// rotate([1,2,3,4,5,6,7],3)  //[5, 6, 7, 1, 2, 3, 4]
// rotate([-1,-100,3,99],2)  //[ 3, 99, -1, -100 ]




const rotateArray = (arr, k) => {
    k = k % arr.length;

    arr.reverse();

    let left = 0;
    let right = k-1;

    while(left < right){
        [arr[left],arr[right]] = [arr[right],arr[left]]
        left++;
        right--;
    }

    left = k;
    right = arr.length-1;

    while(left<right){
        [arr[left],arr[right]] = [arr[right],arr[left]]
        left++;
        right--;
    }
    console.log(arr);
}

rotateArray([1, 2, 3, 4, 5, 6, 7], 3)