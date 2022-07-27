// Caesar's Cipher is a shift cipher that moves the values of letters 13 places

function rot13(str) {
  return str
    .split("")
    .map((c) => {
      let charCode = c.charCodeAt(0);
      return charCode >= 65 && charCode <= 90
        ? String.fromCharCode(65 + ((charCode - 65 + 13) % 26))
        : c;
    })
    .join("");
}

console.log(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT."));
