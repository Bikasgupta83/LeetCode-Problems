// 557. Reverse Words in a String III

var reverseWords = function(s) {
    s = s.split(" ");
    let i = 0;
    while(i<s.length){
        let word = s[i].split("");

        let left = 0;
        let right = s[i].length-1;

        while(left<right){
            [word[left],word[right]] = [word[right],word[left]];
            left++;
            right--;
        }

        s[i] = word.join("");

        i++;
    }

    console.log(s.join(" "))
};

reverseWords("Let's take LeetCode contest"); //s'teL ekat edoCteeL tsetnoc
reverseWords("Mr Ding");  //rM gniD