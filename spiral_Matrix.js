// 54. Spiral Matrix

var spiralOrder = function (matrix) {
    let top = 0, left = 0, right = matrix[0].length - 1, bottom = matrix.length - 1;
    let result = [];

    while (left <= right && top<=bottom) {
        for (let j = left; j <= right; j++) {
            result.push(matrix[top][j])
        }
        top++;

        for (let i = top; i <= bottom; i++) {
            result.push(matrix[i][right])
        }
        right--;

        if (top <= bottom) {
            for (let j = right; j >= left; j--) {
                result.push(matrix[bottom][j]);
            }
            bottom--;
        }

        if (left <= right) {
            for (let i = bottom; i >= top; i--) {
                result.push(matrix[i][left])
            }
            left++;
        }
    }

    console.log(result);
};


spiralOrder([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);  //[1,2,3,6,9,8,7,4,5]