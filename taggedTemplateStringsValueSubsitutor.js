function replaceSpecialCharacters(word)
{
    word = word.replace(/&/g,'&amp;');
    word = word.replace(/'/g,'&apos;');
    word = word.replace(/"/g,'&quot;');
    word = word.replace(/</g,'&lt;');
    word = word.replace(/>/g,'&gt;');   
    return word;
}

function html(words,...args) {
    let result = words[0];
    const numOfArguments = args.length;
    for(let index = 0; index < numOfArguments; index++)
    {
        result+= replaceSpecialCharacters(args[index]) + words[index+1];
    }
    return result;
}


console.log(html`<b>${process.argv[2]} says</b>: "${process.argv[3]}"`);