
// displaying the last word of a sentence and identifying its length
function stringOperations()
{
    let text = "  I can learn Playwright   ";
   let textTrim=text.trim();
   console.log(`After trimming of sentence ${textTrim}`);
    let wordSplit = textTrim.split(" ");
    let strlength = wordSplit.length;
    let lastword = wordSplit[wordSplit.length-1];
    console.log(wordSplit);
    console.log(`Lastword of the sentence is ${lastword}`);
    console.log(`length of the lastword is ${lastword.length}`);
}
stringOperations();


