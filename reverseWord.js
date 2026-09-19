// 151. Reverse Words in a String


//?  /   \s   +   /
//?  ↑   ↑    ↑   ↑
//?  │   │    │   │
//?  │   │    │   └── end of regex
//?  │   │    └────── one or more
//?  │   └─────────── whitespace
//?  └─────────────── start of regex


//! With built in methods

var reverseWords = function (s) {
    s = s.trim().split(/\s+/);

    let i = 0;
    let j = s.length - 1;
    while (i < j) {
        [s[i], s[j]] = [s[j], s[i]];
        i++; j--;
    }

    console.log(s.join(" "))
};

// reverseWords("the sky is blue");
// reverseWords("  hello world  ");
// reverseWords("a good   example");





//! Without Built in methods

const reverseWord = (s) => {
    let arr = [];
    let i = 0;
    while (i < s.length) {
        if (s[i] !== " ") {
            let j = i;
            while (j < s.length && s[j] !== " ") {
                j++;
            }
            arr.push(s.slice(i, j));
            i = j + 1;
        } else {
            i++;
        }
    }

    i = 0;
    j = arr.length - 1;

    while (i < j) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
        i++; j--;
    }

    console.log(arr.join(" "));
}

// reverseWord("  hello world  ");
// reverseWord("the sky is blue");
// reverseWord("a good   example");
