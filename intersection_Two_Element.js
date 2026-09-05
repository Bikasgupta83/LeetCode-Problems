// 349. Intersection of Two Arrays

var intersection = function(nums1, nums2) {
    let set1 = new Set(nums1);
    let set2 = new Set(nums2);
    let result = [];

    for(let ele of set2){
        if(set1.has(ele)){
            result.push(ele);
        }
    }

    console.log(result)
};

intersection([1,2,2,1,3],[2,2])
intersection([4,9,5],[9,4,9,8,4])