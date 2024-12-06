
let chars = "madam";
function reversalString(chars)
{
    
    let charsSplit = chars.split("");
    console.log(charsSplit);
    let reversed ="";
for (let index = charsSplit.length-1; index>=0 ; index--) {
  reversed = reversed+charsSplit[index];
  console.log(reversed);   
}
    return reversed;
}

function isPalindrome(chars)
{
    let reverseStr = reversalString(chars);
if(chars===reverseStr)
{
    console.log("string is palindrome")
    return true;
}
else
{
console.log("string is not palindrome")
return false;
}
}
//reversalString();
isPalindrome(chars);