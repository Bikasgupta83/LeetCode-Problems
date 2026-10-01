// 205. Isomorphic Strings


var isIsomorphic = function(s, t) {
    if(s.length !== t.length) return false;

    let mapS = new Map();
    let mapT = new Map();

    for(let i=0;i<s.length;i++){
        let chS = s[i];
        let chT = t[i];

        if(mapS.has(chS) && mapS.get(chS) !== chT) return false;
        if(mapT.has(chT) && mapT.get(chT) !== chS) return false;

        mapS.set(chS,chT);
        mapT.set(chT,chS);
    }
    return true;
};

console.log(isIsomorphic("egg","add"));
console.log(isIsomorphic("f11","b23"))
console.log(isIsomorphic("paper","title"));