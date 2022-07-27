// This function converts Arabic numerals to Roman numerals

function convertToRoman(num) {
  const ARAB_TO_ROMAN = [
    [1000, "M"],
    [900, "CM"],
    [500, "D"],
    [400, "CD"],
    [100, "C"],
    [90, "XC"],
    [50, "L"],
    [40, "XL"],
    [10, "X"],
    [9, "IX"],
    [5, "V"],
    [4, "IV"],
    [1, "I"],
  ];

  return ARAB_TO_ROMAN.reduce((romanNumeral, [arabVal, romanVal]) => {
    while (num >= arabVal) {
      romanNumeral += romanVal;
      num -= arabVal;
    }

    return romanNumeral;
  }, "");
}

console.log(convertToRoman(36));
