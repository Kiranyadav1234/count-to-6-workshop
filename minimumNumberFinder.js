var arrayOfNumber=process.argv.slice(2);
var minimumOfArray=Math.min(...arrayOfNumber);
console.log(  `The minimum of [${arrayOfNumber}] is ${minimumOfArray}`);