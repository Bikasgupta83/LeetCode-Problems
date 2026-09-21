// 80. Remove Duplicates from Sorted Array II

var removeDuplicates = function(arr) {
    let i = 1;
    while(i<arr.length){
        if(arr[i-1] == arr[i] && arr[i] == arr[i+1]){
            arr.splice(i+1,1);
        }else if(arr[i-1] == arr[i] && arr[i] !== arr[i+1]){
            i++
        }else{
            i++;
        }
    }
    console.log(arr.length)
};

removeDuplicates([1,1,1,2,2,3]); //5
removeDuplicates([0,0,1,1,1,1,2,3,3]); //7