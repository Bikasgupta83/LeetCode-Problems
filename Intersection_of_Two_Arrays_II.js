// 350. Intersection of Two Arrays II


var intersect = function (nums1, nums2) {
    let result = []
    let map = new Map();

    for(let num of nums1){
        map.set(num,(map.get(num) || 0)+1);
    }

    console.log(map);

    for(let num of nums2){
        if(map.get(num) > 0){
            result.push(num);

            map.set(num,(map.get(num)-1))
        }
    }

    console.log(result)
};



intersect([1, 2, 2, 1], [2, 2]);
intersect([4, 9, 5], [9, 4, 9, 8, 4]);
intersect([2, 1], [1, 2]);
