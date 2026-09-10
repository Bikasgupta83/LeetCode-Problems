// 844. Backspace String Compare

var backspaceCompare = function(s, t) {
    s = s.split("");
    t = t.split("");

    let arr1 = [];
    let arr2 = [];

    for (let ch of s) {
        if (ch === "#") {
            arr1.pop();
        } else {
            arr1.push(ch);
        }
    }

    for (let ch of t) {
        if (ch === "#") {
            arr2.pop();
        } else {
            arr2.push(ch);
        }
    }

    s = arr1.join("");
    t = arr2.join("");

    console.log(s === t);
};

backspaceCompare("ab#c","ad#c");