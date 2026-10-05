// 3980. Minimum Operations to Transform Binary String


var minOperations = function(s1, s2) {

    s1 = s1.split("");

    let i = 0;
    let operations = 0;

    while (i < s1.length) {
        if (s1[i] === s2[i]) {
            i++;
            continue;
        }

        if (s1[i] === '0' && s2[i] === '1') {
            s1[i] = '1';
            operations++;
            i++;
            continue;
        }

        if (s1[i] === '1' && s2[i] === '0') {

            if (i + 1 >= s1.length) {
                return -1;
            }

            if (s1[i + 1] === '0') {
                s1[i + 1] = '1';
                operations++;
            }

            s1[i] = '0';
            s1[i + 1] = '0';
            operations++;
            continue;
        }
    }

    return s1.join("") === s2 ? operations : -1;
};

// console.log(minOperations("11","00"));
// console.log(minOperations("01","10"));
console.log(minOperations("110111","000011"));