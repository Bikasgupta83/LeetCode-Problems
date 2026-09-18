// 246. Strobogrammatic Number

const strobogrammaticNumber = (str)=>{
    let map = new Map([
        ["0", "0"],
        ["1", "1"],
        ["8", "8"],
        ["6", "9"],
        ["9", "6"]
    ]);


    let i=0;
    let j = str.length-1;

    while(i<=j){
        let l = str.charAt(i);
        let r = str.charAt(j);

        if(map.has(l)){
            if(map.get(l) !== r){
                return false;
            }else{
                i++;
                j--;
            }
        }else{
            return false;
        }

    }

    return true;
}

console.log(strobogrammaticNumber("168896"))
console.log(strobogrammaticNumber("619"))
console.log(strobogrammaticNumber("198861"))