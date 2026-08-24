// 977. Squares of a Sorted Array

var sortedSquares = function(nums) {
    let square = nums
                    .map((ele)=>{
                        return ele*ele
                    })
                    .sort((a,b)=>{
                        return a-b;
                    });
    return square;
};

// console.log(sortedSquares([-4,-1,0,3,10])); //[ 0, 1, 9, 16, 100 ]
// console.log(sortedSquares([-7,-3,2,3,11])); //[ 4, 9, 9, 49, 121 ]



const sortedSquaresArray = (arr) =>{
    let res = [];
    let i = 0;
    let j = arr.length-1;
    let k = arr.length-1;
    while(i<=j){
        if(Math.abs(arr[i]) < Math.abs(arr[j])){
            res[k] = arr[j]*arr[j];
            j--;
        }else{
            res[k] = arr[i]*arr[i];
            i++;
        }
        k--;        
    }
    return res;
}
// console.log(sortedSquaresArray([-4,-1,0,3,10]));
// console.log(sortedSquaresArray([-7,-3,2,3,11]));