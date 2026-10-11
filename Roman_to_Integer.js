// 13. Roman to Integer


var romanToInt = function(s) {
    let map = new Map();

    map.set("I",1);
    map.set("V",5);
    map.set("X",10);
    map.set("L",50);
    map.set("C",100);
    map.set("D",500);
    map.set("M",1000);


    let helper = {
        "I":["V","X"],
        "X":["L","C"],
        "C":["D","M"]
    }
    
    let result = 0;
    for(let i=0;i<s.length;i++){
        let ch = s[i];
        let nextChar = s[i+1];

        if(helper[ch] && helper[ch].includes(nextChar)){
            result += map.get(nextChar) - map.get(ch);
            i++;
        }else{
            result += map.get(ch);
        }  
    }

    console.log(result);
};


romanToInt("III");