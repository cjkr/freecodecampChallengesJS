function palindrome(str) {
  // process string to remove non-alphanumeric characters
  // and make everything lowercase
  let formattedStr = str
    .toLowerCase()
    .split("")
    .filter(
      (c) =>
        (c.charCodeAt(0) >= 97 && c.charCodeAt(0) <= 122) ||
        (c.charCodeAt(0) >= 48 && c.charCodeAt(0) <= 57)
    );

  let startIdx = 0;
  let endIdx = formattedStr.length - 1;

  while (startIdx < endIdx) {
    if (formattedStr[startIdx] !== formattedStr[endIdx]) return false;
    startIdx += 1;
    endIdx -= 1;
  }

  return true;
}

s = "2A3*3a2";
s = "2A3 3a2";

console.log(palindrome(s));
