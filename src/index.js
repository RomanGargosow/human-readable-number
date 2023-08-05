module.exports = function toReadable(number) {
    const onesWords = [
        "",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];

    const tensWords = [
        "",
        "",
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];

    function getNumberWord(num) {
        if (num < 20) {
            return onesWords[num];
        } else {
            return (
                tensWords[Math.floor(num / 10)] +
                (num % 10 !== 0 ? " " + onesWords[num % 10] : "")
            );
        }
    }

    if (number === 0) {
        return "zero";
    }

    const digits = Array.from(String(number), Number);

    if (number < 20) {
        return onesWords[number];
    } else if (number < 100) {
        // Updated to handle numbers like 20, 30, 40, etc.
        return digits[1] === 0 ? tensWords[digits[0]] : getNumberWord(number);
    } else {
        const hundredsPlace = onesWords[digits[0]] + " hundred";
        const restOfNumber = getNumberWord(digits.slice(1).join(""));
        return hundredsPlace + (restOfNumber ? " " + restOfNumber : "");
    }
};
