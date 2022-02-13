module.exports=function makeImportant(sentence,noOfExclamationMark=sentence.length)
{
    const symbol="!";
    return sentence+symbol.repeat(noOfExclamationMark);
}