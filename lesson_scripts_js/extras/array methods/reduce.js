var prices = [12554,134343,325343,3254234];

var summs = prices.reduce(function (previousValue, value) {
    return previousValue + value;
})
console.log(summs)
