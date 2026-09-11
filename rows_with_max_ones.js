// 2643. Row With Maximum Ones


// Extra Space required
var rowAndMaximumOnes = function (mat) {
    let map = new Map();

    for (let i = 0; i < mat.length; i++) {
        let row = i;
        let count = 0;
        for (let j = 0; j < mat[0].length; j++) {
            if (mat[i][j] == 1) {
                count++;
            }
        }
        map.set(row,count);
    }

    let maxOnes = 0;
    let row = 0;
    for(let [key,value] of map){
        if(value > maxOnes){
            maxOnes = value;
            row = key;
        }
    }
    console.log([row,maxOnes]);
};
// rowAndMaximumOnes([[0, 1], [1, 0]]) //[0,1]
// rowAndMaximumOnes([[0,0,0],[0,1,1]]) //[1,2]
// rowAndMaximumOnes([[0,0],[1,1],[0,0]]) //[1,2]





//No Extra Space required
const rowMaxOnes = (mat) =>{
    let maxOnes = 0;
    let maxRow = 0;
    for(let i=0;i<mat.length;i++){
        let count = 0;
        for(let j=0;j<mat[i].length;j++){
            if(mat[i][j]===1){
                count++;
            }
        }

        if(count > maxOnes){
            maxOnes = count;
            maxRow = i;
        }
    }

    return [maxRow,maxOnes];
}
console.log(rowMaxOnes([[0, 1], [1, 0]]));
console.log(rowMaxOnes([[0,0,0],[0,1,1]]));
console.log(rowMaxOnes([[0,0],[1,1],[0,0]]));