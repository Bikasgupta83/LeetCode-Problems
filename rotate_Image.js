// 48. Rotate Image

// Extra Space use
var rotate = function(matrix) {
    let result = [];

    for(let i=0;i<matrix.length;i++){
        let ans = [];
        for(let j=matrix[0].length-1;j>=0;j--){
            ans.push(matrix[j][i]);
        }
        result.push(ans);
    }
    return result;
};

// console.log(rotate([[1,2,3],[4,5,6],[7,8,9]]))  //[[7,4,1],[8,5,2],[9,6,3]]
// console.log(rotate([[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]))  //[[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]




const rotateArray = (arr) =>{
    for(let i=0;i<arr.length;i++){
        for(let j=i+1;j<arr[0].length;j++){
            let temp = arr[i][j];
            arr[i][j] = arr[j][i];
            arr[j][i] = temp;
        }
    }
    
    for(let i=arr[0].length-1;i>=0;i--){
        for(let j=0;j<arr.length;j++){
            let temp = arr[i][j];
            arr[i][j] = arr[j][i];
            arr[j][i] = temp;
        }
    }
    console.log(arr)
}

rotateArray([[1,2,3],[4,5,6],[7,8,9]])
