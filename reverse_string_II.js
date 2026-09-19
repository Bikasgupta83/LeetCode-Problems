// 541. Reverse String II

const reverseHelper = (char) =>{
    char = char.split("");

    let i = 0;
    let j= char.length-1;
    while(i<=j){
        [char[i],char[j]] = [char[j],char[i]];
        i++;j--;
    }
    return char.join("");
}
var reverseStr = function(s, k) {
    let result = "";

    for(let i=0;i<s.length;i+=2*k){  //O(log n) + O(n) 
        let char = s.slice(i,i+k);
        result += reverseHelper(char);  // ab -> ba , ef -> fe
        result += s.slice(i + k, i + 2 * k); // cd , g
    }
    console.log(result);
};


reverseStr("abcdefg",2)
reverseStr("abcdefghijk",3)