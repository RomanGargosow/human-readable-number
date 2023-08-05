module.exports = function toReadable(number) {
    const ones = [
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

    const tens = [
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

    if (number === 0) {
        return "zero";
    }

    let result = "";

    // Преобразуем сотни
    if (number >= 100) {
        result += ones[Math.floor(number / 100)] + " hundred ";
        number %= 100; // Оставляем только двузначное число
    }

    // Преобразуем числа от 1 до 19
    if (number > 0 && number < 20) {
        result += ones[number];
    } else {
        // Преобразуем десятки
        result += tens[Math.floor(number / 10)] + " ";
        // Преобразуем единицы
        result += ones[number % 10];
    }

    // Удаляем лишние пробелы в конце строки
    return result.trim();
};
