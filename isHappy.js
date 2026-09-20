// 202. Happy Number


const helper = (n) =>{
    let totalSum = 0;
    while(n>0){
        let digit = n%10;
        totalSum += digit * digit;
        n = Math.floor(n / 10);
    }
    return totalSum;
}

var isHappy = function (n) {
    let set = new Set();

    while(n!==1 && !set.has(n)){
        set.add(n);
        n = helper(n);
    }
    console.log(set);
    console.log(n==1);
};

isHappy(19)
isHappy(14)
isHappy(2)