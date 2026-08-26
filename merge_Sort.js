// 88. Merge Sorted Array

// nums1 = [1,2,3,0,0,6,7]
//              i
//                  k
// num2 = [2,5,6,7]
//           j


var merge = function(nums1, m, nums2, n) {
    let i = m-1;
        j = n-1;
        k = nums1.length-1;
    
    while(i>=0 && j>=0){
        if(nums2[j]>nums1[i]){
            nums1[k] = nums2[j];
            j--;
        }else{
            nums1[k] = nums1[i];
            nums1[i] = nums2[j];
            i--;

        }
        k--;
    }

    while(j>=0){
        nums1[k] = nums2[j];
        k--;
        j--;
    }

    console.log(nums1)
};


// merge([1,2,3,0,0,0,0],3,[2,5,6,7],4)
// merge([1],1,[],0);
// merge([0],0,[1],1);





