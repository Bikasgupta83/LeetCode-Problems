// 118. Pascal's Triangle


var generate = function(numRows) {
    let result = [];
    let row = 0;

    while (row < numRows) {
        let currentRow = [];
        let i = 0;

        while (i <= row) {
            if (i === 0 || i === row) {
                currentRow.push(1);
            } else {
                currentRow.push(
                    result[row - 1][i - 1] + result[row - 1][i]
                );
            }

            i++;
        }

        result.push(currentRow);
        row++;
    }

    console.log(result);
};

generate(5);