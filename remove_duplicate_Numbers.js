// 26. Remove Duplicates from Sorted Array

const removeDuplicateNumber = (arr) =>{
    let result = [];

   for(let ele of arr){
        if(!result.includes(ele)){
            result.push(ele)
        }
   }
    
    return result;
}
// console.log(removeDuplicateNumber([1,1,1,2,2,3]));
// console.log(removeDuplicateNumber([0,0,1,1,1,2,2,3,3,4]));




//Extra Space
const removeDuplicates = (arr) =>{
    let i = 0
        j = i+1;
        result = [];

    while(i!==arr.length-1){
        if(!result.includes(arr[j])){
            result.push(arr[j]);
        }
        i++;j++
    }
    console.log(result);
}

// removeDuplicates([1,1,1,2,2,3]);
// removeDuplicates([0,0,1,1,1,2,2,3,3,4]);






// in place
const duplicateNumberRemover = (arr) =>{
    let i = 0;
        j = i+1;
        count = 0;

    while(i!==arr.length-1){
        if(arr[i]===arr[j]){
            arr.splice(j,1);
        }else{
            j++;
            i++
        }
    }
    
    for(let item of arr){
        count++;
    }

    return {arr,count}
}

console.log(duplicateNumberRemover([0,0,1,1,1,2,2,3,3,4]));
console.log(duplicateNumberRemover([1,1,1,2,2,3]));
console.log(duplicateNumberRemover([1,1,2]));
