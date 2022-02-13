var inputs = process.argv.slice(2);
const concatinatedValue=inputs.map((input) => input[0]).reduce((accumulator,element,index)=>{
    return accumulator+=element;


},"");
console.log(`[${inputs}] becomes "${concatinatedValue}"`);