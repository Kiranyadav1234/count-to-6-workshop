module.exports=function average(...args)
{
     var averageOfNumbers=0;
     var sumOfNumber=0;
     args.forEach((element)=>{
         sumOfNumber+=element;

     })
     averageOfNumbers=sumOfNumber/(args.length);
     return averageOfNumbers;
}