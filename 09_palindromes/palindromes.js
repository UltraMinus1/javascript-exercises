const alphanumeric = '1234567890qwertyuiopasdfghjklzxcvbnm'
const palindromes = function (str) {
    let cleanStr = str
    .toLowerCase()
    .split('')
    .filter((char) => {
        return alphanumeric.includes(char);
    })
    .join('')

    let strReversed = cleanStr.split('').reverse().join('');
    return strReversed == cleanStr;
};

// Do not edit below this line
module.exports = palindromes;
