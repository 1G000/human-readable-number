module.exports = function toReadable(number) {
    const numbers = [
        0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
        20,
    ];

    const firstTwenty = [
        "zero",
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
        "twenty",
    ];

    const dozens = [
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

    const numberLength = number.toString().length;
    const twoDigitFirst = dozens[numbers.indexOf(+number.toString()[0])];
    const twoDigitSecond = firstTwenty[+number.toString()[1]];
    const threeDigitFirst = firstTwenty[+number.toString()[0]];
    const threeDigitSecond = dozens[numbers.indexOf(+number.toString()[1])];
    const threeDigitThird = firstTwenty[+number.toString()[2]];

    if (numbers.includes(number)) {
        return firstTwenty[numbers.indexOf(number)];
    }
    if (numberLength === 2 && !numbers.includes(number)) {
        return +number.toString()[1]
            ? `${twoDigitFirst} ${twoDigitSecond}`
            : `${twoDigitFirst}`;
    }
    if (
        numberLength === 3 &&
        numbers.includes(+(number.toString()[1] + number.toString()[2])) &&
        +number.toString()[1] + +number.toString()[2] !== 0
    ) {
        return `${threeDigitFirst} hundred ${
            firstTwenty[+(number.toString()[1] + number.toString()[2])]
        }`;
    }
    if (
        numberLength === 3 &&
        !+number.toString()[1] &&
        !+number.toString()[2]
    ) {
        return `${threeDigitFirst} hundred`;
    } else {
        return `${threeDigitFirst} hundred${
            numbers.indexOf(+number.toString()[1]) ? ` ${threeDigitSecond}` : ""
        }${+number.toString()[2] ? ` ${threeDigitThird}` : ""}`;
    }
};
