const palindromes = function (text) {
    const processedText = text.toLowerCase().replace(/[^a-z]/g, "");
    const reversedText = processedText.split("").reverse().join("");
   
    return processedText === reversedText;
};

// Do not edit below this line
module.exports = palindromes;
