// 2810. Faulty Keyboard

var finalString = function(s) {
    s = s.split("");
    let i = 0;

    while(i<s.length){
        if(s[i]=='i'){
            let left = 0;
            let right = i-1;

            while(left<right){
                [s[left],s[right]] = [s[right],s[left]];
                left++;
                right--;
            }
            s[i] = "";
        }

        i++;
    }

    console.log(s.join(""));
};

finalString("string");  //rtsng
finalString("poiinter"); //ponter