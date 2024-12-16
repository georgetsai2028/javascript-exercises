number = Math.floor(Math.random() * 1000)

const repeatString = function(word, number) {
    let result = '';
    if (number < 0)
    {
        result = "ERROR";
    }
    for (let i = 0; i < number; i++)
    {
        result += word;
    }
    return result;
};

// Do not edit below this line
module.exports = repeatString;
