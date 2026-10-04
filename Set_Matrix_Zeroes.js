// 73. Set Matrix Zeroes


// [
//     [0,1,2,0],
//     [3,4,5,2],
//     [1,3,1,5]
// ]

// [ 
//     [0,0,0,0], 
//     [0,4,5,0], 
//     [0,3,1,0] 
// ]

var setZeroes = function(matrix) {
    let rows = new Set();
    let cols = new Set();

    for(let i=0;i<matrix.length;i++){
        for(let j=0;j<matrix[0].length;j++){
            if(matrix[i][j] == 0){
               rows.add(i);
               cols.add(j);
            }
        }
    }

    //rows
    for(let row of rows){
        for(let i=0;i<matrix[0].length;i++){
            matrix[row][i] = 0;
        }
    }

    //cols
    for(let col of cols){
        for(let j=0;j<matrix.length;j++){
            matrix[j][col] = 0;
        }
    }

    console.log(matrix);
};

setZeroes([[0,1,2,0],[3,4,5,2],[1,3,1,5]]);  //[[0,0,0,0],[0,4,5,0],[0,3,1,0]]
//                                            [[0,0,0,0], [0,4,5,2], [0,3,1,5]]