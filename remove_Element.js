// 27. Remove Element

var removeElement = function(nums, val) {
    let i=0;
    while(i<nums.length){
        if(nums[i] == val){
            nums.splice(i,1);
        }else{
            i++;
        }``
    }
    console.log(nums.length)
};

removeElement([3,2,2,3],3)
removeElement([0,1,2,2,3,0,4,2],2)