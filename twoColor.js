const twoColor = (nums) =>{
    let i=0;
    let j=nums.length-1;

    while(i<=j){
        if(nums[i]==0){
            i++;
        }else{
            let temp = nums[i];
            nums[i] = nums[j];
            nums[j] = temp;
            j--;
        }
    }
    return nums;
}
console.log(twoColor([0, 1, 0, 3, 12]));  //[0,0,3,12,1]
console.log(twoColor([0]));