// 121. Best Time to Buy and Sell Stock

var maxProfit = function (prices) {
    let lowestPriceBuy = prices[0];
    let maxProfit = 0;

    for(let i=1;i<prices.length;i++){
        if(prices[i] < lowestPriceBuy){
            lowestPriceBuy = prices[i]
        }
        let profit = prices[i] - lowestPriceBuy;

        if(profit > maxProfit){
            maxProfit = profit;
        }
    }
    console.log(maxProfit)
};

maxProfit([7, 1, 5, 3, 6, 4]); //5
maxProfit([7, 6, 4, 3, 1]); //0
maxProfit([2,4,1]); //2