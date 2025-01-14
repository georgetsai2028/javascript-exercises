const fibonacci = function(fibNumber) {
let firstNum = 0;   
let secondNum = 1;
let nextNum;
if (fibNumber < 0)
{
    return "OOPS";
}
if (fibNumber == 0)
{
    return firstNum;
}
if (fibNumber == 1)
{
    return secondNum;
}
for(let i = 2; i <= fibNumber; i++)
{
    nextNum = firstNum + secondNum;
    firstNum = secondNum;
    secondNum = nextNum;
}
return nextNum;
};

// Do not edit below this line
module.exports = fibonacci;
